
using Sitecore.Services.GraphQL.EdgeSchema.Configuration;
using System;
using System.Linq;
using System.Web;
using Sitecore.DependencyInjection;
using Microsoft.Extensions.DependencyInjection;
using GraphQL.Types;
using XmCloudSXAStarter.Helpers;
using Sitecore.Data.Items;
using Sitecore;
using GraphQL;
using Sitecore.Data.Managers;
using Sitecore.Globalization;
using Sitecore.Data.LanguageFallback;
using Sitecore.Services.GraphQL.EdgeSchema.Queries;

namespace XmCloudSXAStarter.Queries
{
    public class CustomItemQuery : ItemQuery
    {
        private readonly MeccaContentService _meccaContentService;
        private readonly IEdgeSettings _settings;

        public CustomItemQuery()
            : this(new MeccaContentService(),
                ServiceLocator.ServiceProvider.GetService<IEdgeSettings>())
        {
        }

        public CustomItemQuery(MeccaContentService meccaContentService, IEdgeSettings edgeSettings)
        {
            var queryArgumentArray = new QueryArgument[2];

            var queryArgument1 = new QueryArgument<StringGraphType>
            {
                Name = Constant.GraphQlArguments.Path,
                Description = "The item path or ID to get"
            };
            queryArgumentArray[0] = queryArgument1;

            var queryArgument2 = new QueryArgument<NonNullGraphType<StringGraphType>>
            {
                Name = Constant.GraphQlArguments.Language,
                Description = "The item language to request (defaults to the default language)"
            };
            queryArgumentArray[1] = queryArgument2;


            Arguments = new QueryArguments(queryArgumentArray);
            _meccaContentService = meccaContentService;
            _settings = edgeSettings;
        }

        protected override Item Resolve(ResolveFieldContext context)
        {
            var name = context.GetArgument<string>(Constant.GraphQlArguments.Language);
            Context.Database = Database;
            if (name == string.Empty || !Language.TryParse(name, out var result))
                throw new ExecutionError("In the 'item' field, the 'language' argument contains an invalid value.");
            if (result == null)
                result = LanguageManager.DefaultLanguage;
            Context.Language = result;

            var inputPathOrIdOrShortId = context.GetArgument<string>(Constant.GraphQlArguments.Path);
            if (inputPathOrIdOrShortId == null)
                return Database.GetRootItem(result);


            // Get dateTime parameter from query strings 
            var dateTimeQueryString = HttpContext.Current.Request.QueryString.Get("preview_datetime");

            if (DateTime.TryParse(dateTimeQueryString, out var dateArg))
                // set the date in the Items collection as temporary storage for other pipelines to retrieve
                HttpContext.Current.Items.Add(Constant.CookieNames.EdgePreviewDate,
                    dateArg.ToString(Constant.EdgePreviewDateFormat));

            using (new LanguageFallbackItemSwitcher(_settings.ItemLanguageFallbackEnabled))
            {
                return !_meccaContentService.TryResolveItem(Database, inputPathOrIdOrShortId, result, dateArg,
                           out var obj) ||
                       obj == null || obj.Versions.Count == 0 || FilterItem(obj)
                    ? null
                    : obj;
            }
        }
    }
}