using Sitecore.Data.Fields;
using Sitecore.LayoutService.Configuration;
using Sitecore.Mvc.Presentation;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Web;

namespace XmCloudSXAStarter.Resolvers
{
    public class MediaContentResolver : Sitecore.LayoutService.ItemRendering.ContentsResolvers.IRenderingContentsResolver
    {
        public bool IncludeServerUrlInMediaUrls { get; set; } = false;
        public bool UseContextItem { get; set; }
        public string ItemSelectorQuery { get; set; }
        public NameValueCollection Parameters { get; set; }
        public object ResolveContents(Rendering rendering, IRenderingConfiguration renderingConfig)
        {
            //if you want to access the datasource item
            var datasource = !string.IsNullOrEmpty(rendering.DataSource)
                ? rendering.RenderingItem?.Database.GetItem(rendering.DataSource)
                : null;

            // check image field
            if (datasource.Fields.Contains(Sitecore.Data.ID.Parse("")))
            {
                ImageField field = datasource.Fields["ImageField"];                                
            }

            return new
            {
                name = datasource.Name,
                date = DateTime.Now,
                hello = "world"
            };
        }
    }
}