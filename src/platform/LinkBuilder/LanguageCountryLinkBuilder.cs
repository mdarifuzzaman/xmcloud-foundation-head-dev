using Sitecore.Data.Items;
using Sitecore.Links.UrlBuilders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace XmCloudSXAStarter.LinkBuilder
{
    public class LanguageCountryLinkBuilder : ItemUrlBuilder
    {
        public LanguageCountryLinkBuilder(DefaultItemUrlBuilderOptions defaultOptions) : base(defaultOptions)
        {

        }
        public override string Build(Item item, ItemUrlBuilderOptions options)
        {
            var itemUrl = base.Build(item, options);
            var supportedLanguages = new List<string> { "en", "ja-JP" };
            var supportedCountries = new List<string> { "au", "jp" };

            foreach (var lan in supportedLanguages)
            {
                foreach (var country in supportedCountries)
                {
                    var currentFormat = $"{lan}/{country}";
                    var newFormat = $"{country}/{lan}";
                    if (itemUrl.Contains(currentFormat))
                    {
                        itemUrl = itemUrl.Replace(currentFormat, newFormat);
                        break;
                    }
                }
            }

            return itemUrl;
        }


    }
}