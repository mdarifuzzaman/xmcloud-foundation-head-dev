using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json.Linq;
using Sitecore.Abstractions;
using Sitecore.Configuration;
using Sitecore.Data.Items;
using Sitecore.DependencyInjection;
using Sitecore.Diagnostics;
using Sitecore.LayoutService.Configuration;
using Sitecore.LayoutService.GraphQL.Helpers;
using Sitecore.LayoutService.GraphQL.LayoutService;
using Sitecore.LayoutService.Serialization;
using Sitecore.Services.GraphQL.Hosting;
using Sitecore.Services.GraphQL.Hosting.Configuration;
using Sitecore.XA.Foundation.Editing.Service;
using Sitecore.XA.Foundation.Multisite.Extensions;
using Sitecore.XA.Foundation.SitecoreExtensions.Interfaces;
using System;
using System.Globalization;
using System.Linq;
using XmCloudSXAStarter.Helpers;

namespace XmCloudSXAStarter.LayoutService
{
    public class CustomRenderingContentsResolver : GraphQLAwareRenderingContentsResolverExt
    {
        protected IControlEditabilityService ControlEditabilityService = ServiceLocator.ServiceProvider.GetService<IControlEditabilityService>();

        public CustomRenderingContentsResolver()
          : base(ServiceLocator.ServiceProvider.GetService<IGraphQLEndpointManager>(), ServiceLocator.ServiceProvider.GetService<IDocumentWriter>(), ServiceLocator.ServiceProvider.GetService<BaseLog>(), ServiceLocator.ServiceProvider.GetService<IAsyncHelpers>())
        {
        }

        public CustomRenderingContentsResolver(
          IGraphQLEndpointManager graphQLEndpointManager,
          IDocumentWriter documentWriter,
          BaseLog log,
          IAsyncHelpers asyncHelpers)
          : base(graphQLEndpointManager, documentWriter, log, asyncHelpers)
        {
        }

        protected override JObject ProcessItem(
          Item item,
          Sitecore.Mvc.Presentation.Rendering rendering,
          IRenderingConfiguration renderingConfig)
        {
            Log.Warn("Inside Rendering Contents Resolver", this);

            using (new SettingsSwitcher("Media.AlwaysIncludeServerUrl", this.IncludeServerUrlInMediaUrls.ToString((IFormatProvider)CultureInfo.InvariantCulture)))
            {
                //here
                var validItemVersion = ItemHelpers.GetValidVersion(item);
                if (validItemVersion == null)
                {
                    return null;
                }

                if (!rendering.Item.IsInSxaContext())
                    return JObject.Parse(renderingConfig.ItemSerializer.Serialize(validItemVersion));
                IControlEditability controlEditability = this.ControlEditabilityService.GetControlEditability((IRendering)new Sitecore.XA.Foundation.Mvc.Wrappers.Rendering(rendering));
                return JObject.Parse(renderingConfig.ItemSerializer.Serialize(validItemVersion, new SerializationOptions()
                {
                    DisableEditing = !controlEditability.Editable
                }));
            }
        }

        public override object ResolveContents(
          Sitecore.Mvc.Presentation.Rendering rendering,
          IRenderingConfiguration renderingConfig)
        {
            JObject contents = base.ResolveContents(rendering, renderingConfig) as JObject;
            if (contents != null && rendering.Item.IsInSxaContext() && !this.ControlEditabilityService.GetControlEditability((IRendering)new Sitecore.XA.Foundation.Mvc.Wrappers.Rendering(rendering)).Editable)
                contents.Descendants().Where<JToken>((Func<JToken, bool>)(d => d.Path.EndsWith(".editable", StringComparison.OrdinalIgnoreCase) && d.HasValues)).ToList<JToken>().ForEach((Action<JToken>)(e => contents.SelectToken(e.Path).Parent.Remove()));
            return (object)contents;
        }
    }
}