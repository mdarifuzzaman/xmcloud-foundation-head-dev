
using Sitecore;
using Sitecore.Data.Items;
using Sitecore.Links.UrlBuilders;
using System;

namespace XmCloudSXAStarter.LinkBuilder
{
    public class MeccaItemUrlBuilder : ItemUrlBuilder
    {
        /// <summary>
        ///     Initializes a new instance of the <see cref="MeccaItemUrlBuilder" /> class.
        /// </summary>
        /// <param name="defaultOptions">The defaultOptions<see cref="DefaultItemUrlBuilderOptions" />.</param>
        public MeccaItemUrlBuilder(DefaultItemUrlBuilderOptions defaultOptions) : base(defaultOptions)
        {
        }

        /// <summary>
        ///     Check if referenced Item is a Mecca PIM imported Product/Brand/Category and infer corresponding PDP/PLP URL
        /// </summary>
        /// <param name="item">The item<see cref="Item" />.</param>
        /// <param name="options">The options<see cref="ItemUrlBuilderOptions" />.</param>
        /// <returns>The <see cref="string" />.</returns>
        public override string Build(Item item, ItemUrlBuilderOptions options)
        {
            if (item == null)
            {
              var result = base.Build(item, options);
              return result;
            }

            if (Context.Site == null || Context.Site.Name == "shell")
            {
                var result = base.Build(item, options);
                return result;
            }

            var fallbackUrl = base.Build(item, options);

            //Sitecore.Diagnostics.Error.LogError("Url builder path:" + fallbackUrl);

            if (!item.Paths.IsMediaItem && options.AlwaysIncludeServerUrl == false)
            {
                var result2 = "/" + Guid.NewGuid() + item.Name;
                return result2;
            }

            return fallbackUrl;
        }
    }
}