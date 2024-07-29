
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
using Sitecore.Abstractions;
using Sitecore.IO;

namespace XmCloudSXAStarter.Queries
{
    public class CustomLayoutQuery : LayoutQuery
    {
        private readonly BaseSiteContextFactory _baseSiteContextFactory;
        private readonly MeccaContentService _meccaContentService;
        private readonly IEdgeSettings _settings;

        public CustomLayoutQuery()
            : this(ServiceLocator.ServiceProvider.GetService<BaseSiteContextFactory>(),
                ServiceLocator.ServiceProvider.GetService<IEdgeSettings>())
        {
            _meccaContentService = new MeccaContentService();
        }

        public CustomLayoutQuery(
            BaseSiteContextFactory baseSiteManager,
            IEdgeSettings edgeSettings)
        {
            var queryArgumentArray = new QueryArgument[3];
            var queryArgument1 = new QueryArgument<NonNullGraphType<StringGraphType>>
            {
                Name = Constant.GraphQlArguments.Site,
                Description = "Site"
            };
            queryArgumentArray[0] = queryArgument1;

            var queryArgument2 = new QueryArgument<NonNullGraphType<StringGraphType>>
            {
                Name = Constant.GraphQlArguments.RoutePath,
                Description = "Route path"
            };
            queryArgumentArray[1] = queryArgument2;

            var queryArgument3 = new QueryArgument<NonNullGraphType<StringGraphType>>
            {
                Name = Constant.GraphQlArguments.Language,
                Description = "Language"
            };
            queryArgumentArray[2] = queryArgument3;


            Arguments = new QueryArguments(queryArgumentArray);
            _baseSiteContextFactory = baseSiteManager;
            _settings = edgeSettings;
        }

        protected override Item Resolve(ResolveFieldContext context)
        {
            if (_meccaContentService == null)
                return null;

            var siteName = context.GetArgument<string>(Constant.GraphQlArguments.Site);
            var routePath = context.GetArgument<string>(Constant.GraphQlArguments.RoutePath);
            var name2 = context.GetArgument<string>(Constant.GraphQlArguments.Language);

            Context.Database = Database;
            if (name2 == string.Empty || !Language.TryParse(name2, out var result))
                throw new ExecutionError("In the 'layout' field, the 'language' argument contains an invalid value.");
            if (string.IsNullOrEmpty(siteName))
                throw new ExecutionError("In the 'layout' field, the 'site' argument cannot be null or empty.");
            if (result == null)
                result = LanguageManager.DefaultLanguage;
            Context.Language = result;

            var siteInfo = _baseSiteContextFactory.GetSiteInfo(siteName);
            if (siteInfo == null)
                return null;
            var path2 = FileUtil.MakePath(siteInfo.RootPath, siteInfo.StartItem);
            var str = string.Join("/", path2, routePath);
            var rootItem = Database.GetItem(path2);
            var obj1 = _meccaContentService.ResolveItemByPath(routePath, rootItem);


            // Get dateTime parameter from query strings 
            var dateTimeQueryString = HttpContext.Current.Request.QueryString.Get("preview_datetime");

            if (DateTime.TryParse(dateTimeQueryString, out var dateArg))
                // set the date in the Items collection as temporary storage for other pipelines to retrieve
                HttpContext.Current.Items.Add(Constant.CookieNames.EdgePreviewDate,
                    dateArg.ToString(Constant.EdgePreviewDateFormat));

            using (new LanguageFallbackItemSwitcher(_settings.ItemLanguageFallbackEnabled))
            {
                return !_meccaContentService.TryResolveItem(Database, obj1 != null ? obj1.Paths.FullPath : str, result,
                    dateArg,
                    out var obj2) || obj2 == null || obj2.Versions.Count == 0
                    ? null
                    : obj2;
            }
        }
    }
}