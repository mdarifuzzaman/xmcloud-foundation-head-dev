using Newtonsoft.Json.Linq;
using Sitecore.Common;
using Sitecore.Configuration;
using Sitecore.Diagnostics;
using Sitecore.LayoutService.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Sitecore.Data.Items;
using Sitecore.Abstractions;
using Sitecore.Services.GraphQL.Hosting.Configuration;
using Sitecore.LayoutService.GraphQL.LayoutService;
using Sitecore.Services.GraphQL.Hosting;
using Sitecore.LayoutService.GraphQL.Helpers;
using Sitecore.Mvc.Presentation;
using GraphQL;
using Sitecore.Services.GraphQL.Abstractions;
using Sitecore.Services.GraphQL.Hosting.Performance;
using Sitecore.Services.GraphQL.Hosting.QueryTransformation;
using System.Threading.Tasks;
using Sitecore.JavaScriptServices.Configuration;
using GraphQL.Language.AST;
using XmCloudSXAStarter.Helpers;
using Sitecore.LayoutService.ItemRendering.ContentsResolvers;

namespace XmCloudSXAStarter.LayoutService
{
    public class CustomGraphQLAwareRenderingContentsResolver : Sitecore.LayoutService.ItemRendering.ContentsResolvers.RenderingContentsResolver
    {
        private readonly IConfigurationResolver _configurationResolver;
        private readonly IDocumentWriter _documentWriter;
        private readonly BaseLog _log;
        private readonly IAsyncHelpers _asyncHelpers;
        private readonly Dictionary<string, IGraphQLEndpoint> _graphQLEndpoints;

        public CustomGraphQLAwareRenderingContentsResolver(
          IConfigurationResolver configurationResolver,
          IGraphQLEndpointManager graphQLEndpointManager,
          IDocumentWriter documentWriter,
          BaseLog log,
          IAsyncHelpers asyncHelpers)
        {
            Assert.ArgumentNotNull((object)configurationResolver, nameof(configurationResolver));
            Assert.ArgumentNotNull((object)graphQLEndpointManager, nameof(graphQLEndpointManager));
            Assert.ArgumentNotNull((object)documentWriter, nameof(documentWriter));
            Assert.ArgumentNotNull((object)log, nameof(log));
            Assert.ArgumentNotNull((object)asyncHelpers, nameof(asyncHelpers));
            this._configurationResolver = configurationResolver;
            this._documentWriter = documentWriter;
            this._log = log;
            this._asyncHelpers = asyncHelpers;
            this._graphQLEndpoints = graphQLEndpointManager.GetEndpoints().ToDictionary<IGraphQLEndpoint, string, IGraphQLEndpoint>((Func<IGraphQLEndpoint, string>)(endpoint => endpoint.Url), (Func<IGraphQLEndpoint, IGraphQLEndpoint>)(endpoint => endpoint), (IEqualityComparer<string>)StringComparer.OrdinalIgnoreCase);
        }

        public override object ResolveContents(
          Sitecore.Mvc.Presentation.Rendering rendering,
          IRenderingConfiguration renderingConfig)
        {
            RenderingItem renderingItem = rendering.RenderingItem;
            if (renderingItem == null)
                return base.ResolveContents(rendering, renderingConfig);
            string str = renderingItem.InnerItem[Sitecore.JavaScriptServices.Core.FieldIDs.JsonRendering.GraphQLQuery];
            if (string.IsNullOrWhiteSpace(str))
                return base.ResolveContents(rendering, renderingConfig);
            AppConfiguration appConfiguration = this._configurationResolver.ResolveForItem(Sitecore.Context.Item);
            if (appConfiguration == null)
            {
                this._log.Warn("[JSS] - Rendering " + renderingItem.InnerItem.Paths.FullPath + " defined a GraphQL query to resolve its data, but when rendered on item " + Sitecore.Context.Item.Paths.FullPath + " it was not within a known JSS app path. The GraphQL query will not be used.", (object)this);
                return base.ResolveContents(rendering, renderingConfig);
            }
            if (string.IsNullOrWhiteSpace(appConfiguration.GraphQLEndpoint))
            {
                this._log.Error("[JSS] - The JSS app " + appConfiguration.Name + " did not have a graphQLEndpoint set, but rendering " + renderingItem.InnerItem.Paths.FullPath + " defined a GraphQL query to resolve its data. The GraphQL query will not be used until an endpoint is defined on the app config.", (object)this);
                return base.ResolveContents(rendering, renderingConfig);
            }
            IGraphQLEndpoint graphQlEndpoint;
            if (!this._graphQLEndpoints.TryGetValue(appConfiguration.GraphQLEndpoint, out graphQlEndpoint))
            {
                this._log.Error("[JSS] - The JSS app " + appConfiguration.Name + " is set to use GraphQL endpoint " + appConfiguration.GraphQLEndpoint + ", but no GraphQL endpoint was registered with this URL. GraphQL resolution will not be used.", (object)this);
                return base.ResolveContents(rendering, renderingConfig);
            }
            LocalGraphQLRequest localGraphQlRequest = new CustomGraphQLAwareRenderingContentsResolver.LocalGraphQLRequest();
            localGraphQlRequest.Query = str;
            LocalGraphQLRequest request = localGraphQlRequest;
            request.LocalVariables.Add("contextItem", Sitecore.Context.Item.ID.Guid.ToString());
            request.LocalVariables.Add("datasource", rendering.DataSource);
            request.LocalVariables.Add("language", Sitecore.Context.Language.Name);
            IDocumentExecuter executor = graphQlEndpoint.CreateDocumentExecutor();
            ExecutionOptions options = graphQlEndpoint.CreateExecutionOptions((GraphQLRequest)request, !HttpContext.Current.IsCustomErrorEnabled);
            if (options == null)
                throw new ArgumentException("Endpoint returned null options.");
            TransformationResult transformationResult = graphQlEndpoint.SchemaInfo.QueryTransformer.Transform((GraphQLRequest)request);
            if (transformationResult.Errors != null)
                return (object)new ExecutionResult()
                {
                    Errors = transformationResult.Errors
                };
            options.Query = transformationResult.Document.OriginalQuery;
            options.Document = transformationResult.Document;
            if (options.Document.Operations.Any<Operation>((Func<Operation, bool>)(op => op.OperationType != 0)))
                throw new InvalidOperationException("Cannot use mutations or subscriptions in a datasource query. Use queries only.");
            using (QueryTracer queryTracer = graphQlEndpoint.Performance.TrackQuery((GraphQLRequest)request, options))
            {
                ExecutionResult result = this._asyncHelpers.RunSyncWithThreadContext<ExecutionResult>((Func<Task<ExecutionResult>>)(() => executor.ExecuteAsync(options)));
                graphQlEndpoint.Performance.CollectMetrics(graphQlEndpoint.SchemaInfo.Schema, (IEnumerable<Operation>)options.Document.Operations, result);
                new QueryErrorLog((ILogger)new BaseLogAdapter(this._log)).RecordQueryErrors(result);
                queryTracer.Result = result;
                return (object)this._documentWriter.ToJObject((object)result);
            }
        }

        protected override JObject ProcessItem(
            Item item,
            Rendering rendering,
            IRenderingConfiguration renderingConfig)
        {
            Assert.ArgumentNotNull(item, nameof(item));
            Log.Warn("Inside Custom GraphQL Aware Rendering Contents", this);

            var validItemVersion = ItemHelpers.GetValidVersion(item);
            if (validItemVersion == null)
            {
                return null;
            }

            try
            {
                using (new SettingsSwitcher("Media.AlwaysIncludeServerUrl",
                           (Switcher<bool, IncludeServerInMediaUrlSwitcher>.CurrentValue || IncludeServerUrlInMediaUrls)
                           .ToString()))
                {
                    return JObject.Parse(renderingConfig.ItemSerializer.Serialize(validItemVersion));
                }
            }
            catch (Exception ex)
            {
                Log.Warn("MeccaGraphQLAwareRenderingContentsResolver:ProcessItem", ex, this);
            }

            return null;
        }

        protected class LocalGraphQLRequest : GraphQLRequest
        {
            public Inputs LocalVariables { get; } = new Inputs();

            public override Inputs GetVariables() => this.LocalVariables;
        }
    }
}