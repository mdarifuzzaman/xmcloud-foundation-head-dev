// Decompiled with JetBrains decompiler
// Type: Sitecore.XA.JSS.Feature.Navigation.ContentsResolvers.NavigationContentResolver
// Assembly: Sitecore.XA.JSS.Feature.Navigation, Version=11.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 42A44398-7779-4FC9-A756-7CC2620B5A61
// Assembly location: C:\inetpub\wwwroot\sc103sc.dev.local\bin\Sitecore.XA.JSS.Feature.Navigation.dll

using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Sitecore.Data.Fields;
using Sitecore.Data.Items;
using Sitecore.DependencyInjection;
using Sitecore.LayoutService.Configuration;
using Sitecore.LayoutService.ItemRendering.ContentsResolvers;
using Sitecore.LayoutService.Serialization;
using Sitecore.LayoutService.Serialization.FieldSerializers;
using Sitecore.LayoutService.Serialization.Pipelines.GetFieldSerializer;
using Sitecore.Links;
using Sitecore.Links.UrlBuilders;
using Sitecore.Mvc.Presentation;
using Sitecore.XA.Foundation.Abstractions;
using Sitecore.XA.Foundation.Multisite.Services;
using Sitecore.XA.Foundation.Navigation.Services;
using Sitecore.XA.Foundation.RenderingVariants.Extensions;
using Sitecore.XA.Foundation.SitecoreExtensions.Utils;
using Sitecore.XA.JSS.Feature.Navigation.Models;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.IO;
using System.Linq;

namespace Sitecore.XA.JSS.Feature.Navigation.ContentsResolvers
{
    public class NavigationContentResolver : IRenderingContentsResolver
    {
        protected ItemUrlBuilderOptions UrlOptions;
        protected IRenderingConfiguration RenderingConfig;

        protected IContext Context { get; } = ServiceLocator.ServiceProvider.GetService<IContext>();

        protected INavigationService NavigationService { get; } = ServiceLocator.ServiceProvider.GetService<INavigationService>();

        protected ILinkProviderService LinkProviderService { get; } = ServiceLocator.ServiceProvider.GetService<ILinkProviderService>();

        protected IFieldRenderer FieldRenderer { get; } = ServiceLocator.ServiceProvider.GetService<IFieldRenderer>();

        protected IGetFieldSerializerPipeline GetFieldSerializerPipeline { get; } = ServiceLocator.ServiceProvider.GetService<IGetFieldSerializerPipeline>();

        protected LinkProvider LinkProvider => this.LinkProviderService.GetLinkProvider(this.Context.Site);

        public bool IncludeServerUrlInMediaUrls { get; set; }

        public bool IsFromPartialDesign { get; set; }

        public bool UseContextItem { get; set; }

        public string ItemSelectorQuery { get; set; }

        public NameValueCollection Parameters { get; set; }

        public object ResolveContents(Rendering rendering, IRenderingConfiguration renderingConfig)
        {
            if (rendering == null)
                return (object)string.Empty;
            this.RenderingConfig = renderingConfig;
            if (this.Context.Items["GetChromeData::XmlLayoutDefinition-Injected"] is List<Sitecore.XA.Foundation.Presentation.Layout.RenderingModel> source)
                this.IsFromPartialDesign = source.Any<Sitecore.XA.Foundation.Presentation.Layout.RenderingModel>((Func<Sitecore.XA.Foundation.Presentation.Layout.RenderingModel, bool>)(r => r.UniqueId.Equals(rendering.UniqueId)));
            this.UrlOptions = (ItemUrlBuilderOptions)this.LinkProvider.GetDefaultUrlBuilderOptions();
            JArray itemsArray = new JArray();
            this.ConvertVariantElements(this.GetNavigationItems(this.Context.Item, rendering), renderingConfig, itemsArray);
            return (object)itemsArray;
        }

        protected virtual NavigationItemModel CreateNavigationModel(
          Item item,
          int level,
          int index,
          int siblingCount,
          List<NavigationItemModel> children = null,
          int flatLevel = -1)
        {
            string itemUrl = this.LinkProvider.GetItemUrl(item, this.UrlOptions);

            var supportedLanguages = new List<string> { "en", "ja-JP" };
            var supportedCountries = new List<string> { "au", "jp" };

            foreach(var lan in supportedLanguages)
            {
                foreach(var country in supportedCountries)
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

            string str1 = ((IEnumerable<string>)itemUrl.Split('?')).First<string>();
            string str2;
            if (!itemUrl.Contains<char>('?'))
                str2 = string.Empty;
            else
                str2 = ((IEnumerable<string>)itemUrl.Split('?')).Last<string>();
            string str3 = str2;
            return new NavigationItemModel()
            {
                Item = item,
                Children = children,
                Href = str1,
                Styles = this.GenerateCssClasses(item, level, index, siblingCount, (IEnumerable<NavigationItemModel>)children, flatLevel),
                Querystring = str3
            };
        }

        protected virtual List<string> GenerateCssClasses(
          Item item,
          int level,
          int index,
          int siblingCount,
          IEnumerable<NavigationItemModel> children,
          int flatLevel)
        {
            string str = ItemUtils.Lookup(item[Sitecore.XA.Foundation.Navigation.Templates._Navigable.Fields.NavigationClass], this.Context.Database).Select<Item, string>((Func<Item, string>)(i => i["Value"])).FirstOrDefault<string>();
            List<string> cssClasses = new List<string>()
      {
        nameof (level) + level.ToString()
      };
            if (!string.IsNullOrWhiteSpace(str))
                cssClasses.Insert(0, str);
            if (children != null && children.Any<NavigationItemModel>())
                cssClasses.Add("submenu");
            cssClasses.AddRange((IEnumerable<string>)ListsHelper.BuildCssClass(index, siblingCount).Split(' '));
            if (flatLevel > -1)
                cssClasses.Add("flat-level" + flatLevel.ToString());
            if (item.ID.Equals(this.Context.Item.ID))
                cssClasses.Add("active");
            return cssClasses;
        }

        protected void ConvertVariantElements(
          List<NavigationItemModel> navigationItems,
          IRenderingConfiguration renderingConfig,
          JArray itemsArray)
        {
            foreach (NavigationItemModel navigationItem in navigationItems)
            {
                JObject jobject = new JObject();
                jobject.Add((object)new JProperty("Id", (object)navigationItem.Item.ID.ToGuid()));
                jobject.Add((object)new JProperty("Styles", (object)this.GetClassesArray(navigationItem)));
                jobject.Add((object)new JProperty("Href", (object)navigationItem.Href));
                jobject.Add((object)new JProperty("Querystring", (object)navigationItem.Querystring));
                JObject navigationChildNode = jobject;
                this.AddName(navigationItem, navigationChildNode);
                if (navigationItem.Children != null && navigationItem.Children.Any<NavigationItemModel>())
                {
                    JArray itemsArray1 = new JArray();
                    this.ConvertVariantElements(navigationItem.Children, renderingConfig, itemsArray1);
                    navigationChildNode.Add("Children", (JToken)itemsArray1);
                }
                itemsArray.Add((JToken)navigationChildNode);
            }
        }

        public virtual List<NavigationItemModel> GetNavigationItems(
          Item item,
          Rendering rendering)
        {
            List<NavigationItemModel> children = new List<NavigationItemModel>();
            Item startItem = this.NavigationService.GetStartItem(item, rendering);
            if (startItem != null)
            {
                children.AddRange(this.TraverseTree(rendering, startItem, this.NavigationService.GetLevelFrom(rendering)));
                if (rendering.Parameters["AddRoot"] == "1")
                    children = ((IEnumerable<NavigationItemModel>)new NavigationItemModel[1]
                    {
            this.CreateNavigationModel(startItem, 0, 0, 1, children)
                    }).ToList<NavigationItemModel>();
            }
            return children;
        }

        protected virtual IEnumerable<NavigationItemModel> TraverseTree(
          Rendering rendering,
          Item startItem,
          int level)
        {
            List<Item> list = startItem.GetChildren().Where<Item>((Func<Item, bool>)(c => this.NavigationService.IsNavigationItem(rendering, c, level))).ToList<Item>();
            int count = list.Count;
            List<NavigationItemModel> navigationItemModelList = new List<NavigationItemModel>();
            if (list.Any<Item>())
            {
                if (rendering.Parameters["Flattened"] != "1")
                {
                    navigationItemModelList = list.Select<Item, NavigationItemModel>((Func<Item, int, NavigationItemModel>)((c, index) => this.CreateNavigationModel(c, level, index, count, this.TraverseTree(rendering, c, level + 1).ToList<NavigationItemModel>()))).ToList<NavigationItemModel>();
                }
                else
                {
                    int num = 0;
                    foreach (Item startItem1 in list)
                    {
                        navigationItemModelList.Add(this.CreateNavigationModel(startItem1, 0, num++, count, flatLevel: level));
                        navigationItemModelList.AddRange(this.TraverseTree(rendering, startItem1, level + 1));
                    }
                }
            }
            return (IEnumerable<NavigationItemModel>)navigationItemModelList;
        }

        protected virtual string SerializeField(Field field)
        {
            GetFieldSerializerPipelineArgs args = new GetFieldSerializerPipelineArgs()
            {
                Field = field,
                ItemSerializer = this.RenderingConfig.ItemSerializer
            };
            IFieldSerializer result = this.GetFieldSerializerPipeline.GetResult(args);
            if (!this.IsFromPartialDesign)
                result.EnableRenderedValues = true;
            using (StringWriter stringWriter = new StringWriter())
            {
                using (JsonTextWriter writer = new JsonTextWriter((TextWriter)stringWriter))
                {
                    writer.WriteStartObject();
                    result.Serialize(args.Field, writer);
                    writer.WriteEndObject();
                }
                return stringWriter.ToString();
            }
        }

        protected virtual void AddName(NavigationItemModel navigationItem, JObject navigationChildNode)
        {
            if (!string.IsNullOrWhiteSpace(navigationItem.Item[Sitecore.XA.Foundation.Navigation.Templates._Navigable.Fields.NavigationTitle]))
            {
                JToken jtoken = JToken.Parse(this.SerializeField(navigationItem.Item.Fields[Sitecore.XA.Foundation.Navigation.Templates._Navigable.Fields.NavigationTitle]));
                navigationChildNode.Add((object)jtoken.First);
            }
            else if (!string.IsNullOrWhiteSpace(navigationItem.Item["Title"]))
            {
                JToken jtoken = JToken.Parse(this.SerializeField(navigationItem.Item.Fields["Title"]));
                navigationChildNode.Add((object)jtoken.First);
            }
            else
                navigationChildNode.Add((object)new JProperty("DisplayName", (object)navigationItem.Item.DisplayName));
        }

        protected virtual JArray GetClassesArray(NavigationItemModel navigationItem)
        {
            JArray classesArray = new JArray();
            navigationItem.Styles.ForEach((Action<string>)(c => classesArray.Add((JToken)c)));
            return classesArray;
        }
    }
}
