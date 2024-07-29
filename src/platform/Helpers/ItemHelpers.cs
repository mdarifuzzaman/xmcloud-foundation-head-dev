using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using GraphQL;
using Sitecore.Data.Items;

namespace XmCloudSXAStarter.Helpers
{
    public static class ItemHelpers
    {
        public static Item GetValidVersion(Item item)
        {
            if (item == null)
                return null;

            var isAccessedFromPreviewSite = HttpContext.Current.Items[Constant.CookieNames.EdgePreviewDate] != null;
            if (isAccessedFromPreviewSite)
            {
                if (DateTime.TryParse(
                        HttpContext.Current.Items[Constant.CookieNames.EdgePreviewDate]?.GetValue().ToString(),
                        out var targetDate))
                    item = item.Publishing.GetValidVersion(targetDate, false);
            }
            else
            {
                // short term fix, this needs to be removed once CS0391614 hotfix is provided
                if (Sitecore.Context.PageMode.IsNormal)
                {
                    item = item.Publishing.GetValidVersion(
                        DateTime.Now,
                        requireApproved: true,
                        allowFallbackLanguage: true,
                        allowEmpty: false,
                        targetDatabase: null);
                }
            }

            return item;
        }
    }

    public static class Constant
    {
        public static string EdgePreviewDateFormat = "yyyy-MM-dd'T'HH:mm:ss.fffffff'Z'";

        public static class CookieNames
        {
            public static string EdgePreviewDate = "EdgePreviewEndpoint_DateParameter";
        }

        public static class GraphQlArguments
        {
            public static string Path = "path";
            public static string Language = "language";
            public static string Site = "site";
            public static string RoutePath = "routePath";
        }
    }
}