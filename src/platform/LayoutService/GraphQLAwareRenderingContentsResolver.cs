using GraphQL;
using GraphQL.Language.AST;
using Sitecore.Abstractions;
using Sitecore.Data;
using Sitecore.Data.Items;
using Sitecore.LayoutService.Configuration;
using Sitecore.LayoutService.GraphQL.Helpers;
using Sitecore.LayoutService.ItemRendering.ContentsResolvers;
using Sitecore.Mvc.Presentation;
using Sitecore.Services.GraphQL.Abstractions;
using Sitecore.Services.GraphQL.Hosting;
using Sitecore.Services.GraphQL.Hosting.Configuration;
using Sitecore.Services.GraphQL.Hosting.Performance;
using Sitecore.Services.GraphQL.Hosting.QueryTransformation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Sitecore;

namespace XmCloudSXAStarter.LayoutService
{
    public class GraphQLAwareRenderingContentsResolverExt : RenderingContentsResolver
    {
        private const string EndpointName = "edge";
        private static readonly ID JsonRenderingGraphQlQuery = ID.Parse("{17BB046A-A32A-41B3-8315-81217947611B}");
        private readonly IDocumentWriter _documentWriter;
        private readonly BaseLog _log;
        private readonly IAsyncHelpers _asyncHelpers;
        private readonly IGraphQLEndpointManager _graphQlEndpointManager;
        private IGraphQLEndpoint _graphQlEndpoint;

        public GraphQLAwareRenderingContentsResolverExt(
          IGraphQLEndpointManager graphQLEndpointManager,
          IDocumentWriter documentWriter,
          BaseLog log,
          IAsyncHelpers asyncHelpers)
        {
            Sitecore.Diagnostics.Assert.ArgumentNotNull((object)graphQLEndpointManager, nameof(graphQLEndpointManager));
            Sitecore.Diagnostics.Assert.ArgumentNotNull((object)documentWriter, nameof(documentWriter));
            Sitecore.Diagnostics.Assert.ArgumentNotNull((object)log, nameof(log));
            Sitecore.Diagnostics.Assert.ArgumentNotNull((object)asyncHelpers, nameof(asyncHelpers));
            this._documentWriter = documentWriter;
            this._log = log;
            this._asyncHelpers = asyncHelpers;
            this._graphQlEndpointManager = graphQLEndpointManager;
        }

        public override object ResolveContents(
          Rendering rendering,
          IRenderingConfiguration renderingConfig)
        {
            RenderingItem renderingItem = rendering.RenderingItem;
            if (renderingItem == null)
                return base.ResolveContents(rendering, renderingConfig);
            string str = renderingItem.InnerItem[GraphQLAwareRenderingContentsResolverExt.JsonRenderingGraphQlQuery];
            if (string.IsNullOrWhiteSpace(str))
                return base.ResolveContents(rendering, renderingConfig);
            this._graphQlEndpoint = Context.PageMode.IsExperienceEditorEditing ? this.GetVirtualEditingEndpoint() : this.GetPublicEndpoint();
            if (this._graphQlEndpoint == null)
            {
                this._log.Error("Rendering " + renderingItem.InnerItem.Paths.FullPath + " defined a GraphQL query to resolve its data, but public GraphQL endpoint wasn't resolved. GraphQL resolution will not be used.", (object)this);
                return base.ResolveContents(rendering, renderingConfig);
            }
            GraphQLAwareRenderingContentsResolverExt.LocalGraphQLRequest localGraphQlRequest = new GraphQLAwareRenderingContentsResolverExt.LocalGraphQLRequest();
            localGraphQlRequest.Query = str;
            GraphQLAwareRenderingContentsResolverExt.LocalGraphQLRequest request = localGraphQlRequest;
            request.LocalVariables.Add("contextItem", (object)Context.Item.ID.Guid.ToString());
            request.LocalVariables.Add("datasource", (object)rendering.DataSource);
            request.LocalVariables.Add("language", (object)Context.Language.Name);
            return this.ExecuteQuery(request);
        }

        private object ExecuteQuery(
          GraphQLAwareRenderingContentsResolverExt.LocalGraphQLRequest request)
        {
            TransformationResult transformResult = this._graphQlEndpoint.SchemaInfo.QueryTransformer.Transform((GraphQLRequest)request);
            if (transformResult.Errors != null)
                return (object)new ExecutionResult()
                {
                    Errors = transformResult.Errors
                };
            ExecutionOptions options = this.CreateAndPopulateExecutionOptions(request, transformResult);
            using (QueryTracer queryTracer = this._graphQlEndpoint.Performance.TrackQuery((GraphQLRequest)request, options))
            {
                IDocumentExecuter executor = this._graphQlEndpoint.CreateDocumentExecutor();
                ExecutionResult result = this._asyncHelpers.RunSyncWithThreadContext<ExecutionResult>((Func<Task<ExecutionResult>>)(() => executor.ExecuteAsync(options)));
                this._graphQlEndpoint.Performance.CollectMetrics(this._graphQlEndpoint.SchemaInfo.Schema, (IEnumerable<Operation>)options.Document.Operations, result);
                new QueryErrorLog((ILogger)new BaseLogAdapter(this._log)).RecordQueryErrors(result);
                queryTracer.Result = result;
                return (object)this._documentWriter.ToJObject((object)result);
            }
        }

        private ExecutionOptions CreateAndPopulateExecutionOptions(
          GraphQLAwareRenderingContentsResolverExt.LocalGraphQLRequest request,
          TransformationResult transformResult)
        {
            ExecutionOptions executionOptions = this._graphQlEndpoint?.CreateExecutionOptions((GraphQLRequest)request, !HttpContext.Current.IsCustomErrorEnabled);
            if (executionOptions == null)
                throw new ArgumentException("Endpoint returned null options.");
            executionOptions.Query = transformResult.Document.OriginalQuery;
            executionOptions.Document = transformResult.Document;
            if (executionOptions.Document.Operations.Any<Operation>((Func<Operation, bool>)(op => op.OperationType != 0)))
                throw new InvalidOperationException("Cannot use mutations or subscriptions in a datasource query. Use queries only.");
            return executionOptions;
        }

        private IGraphQLEndpoint GetVirtualEditingEndpoint() => this._graphQlEndpointManager.GetEndpoints().FirstOrDefault<IGraphQLEndpoint>((Func<IGraphQLEndpoint, bool>)(e => e.Url.EndsWith("virtualurl")));

        private IGraphQLEndpoint GetPublicEndpoint() => this._graphQlEndpointManager.GetEndpoints().FirstOrDefault<IGraphQLEndpoint>((Func<IGraphQLEndpoint, bool>)(e => e.Url.EndsWith("edge")));

        protected class LocalGraphQLRequest : GraphQLRequest
        {
            public Inputs LocalVariables { get; } = new Inputs();

            public override Inputs GetVariables() => this.LocalVariables;
        }
    }
}