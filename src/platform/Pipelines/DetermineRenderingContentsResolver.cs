using Sitecore.Data.Fields;
using Sitecore.Data.Items;
using Sitecore.Diagnostics;
using Sitecore.LayoutService.Configuration;
using Sitecore.LayoutService.ItemRendering.ContentsResolvers;
using Sitecore.LayoutService.Presentation.Pipelines.RenderJsonRendering;
using Sitecore.Reflection;
using Sitecore.Web;
using System;
using Microsoft.Extensions.DependencyInjection;

namespace XmCloudSXAStarter.Pipelines
{
    public class DetermineRenderingContentsResolver : BaseRenderJsonRendering
    {
        protected readonly IServiceProvider ServiceProvider;

        public DetermineRenderingContentsResolver(
          IConfiguration configuration,
          IServiceProvider serviceProvider)
          : base(configuration)
        {
            Assert.ArgumentNotNull((object)serviceProvider, nameof(serviceProvider));
            this.ServiceProvider = serviceProvider;
        }

        protected override void SetResult(RenderJsonRenderingArgs args)
        {
            Assert.ArgumentNotNull((object)args, nameof(args));
            Assert.IsNotNull((object)args.Result, "args.Result cannot be null");
            args.RenderingContentsResolver = this.GetResolver(args);
        }

        protected virtual IRenderingContentsResolver GetResolver(
          RenderJsonRenderingArgs args)
        {
            Assert.ArgumentNotNull((object)args, nameof(args));
            Assert.IsNotNull((object)args.RenderingConfiguration.RenderingContentsResolver, "args.RenderingConfiguration.RenderingContentsResolver should not be null");
            return this.GetCustomResolver(args.Rendering.RenderingItem) ?? args.RenderingConfiguration.RenderingContentsResolver;
        }

        protected virtual IRenderingContentsResolver GetCustomResolver(
          RenderingItem renderingItem)
        {
            Assert.ArgumentNotNull((object)renderingItem, nameof(renderingItem));
            ReferenceField field1 = (ReferenceField)renderingItem.InnerItem.Fields["Rendering Contents Resolver"];
            if (field1 == null)
                return (IRenderingContentsResolver)null;
            Item targetItem = field1.TargetItem;
            string typeName = targetItem?["Type"];
            if (string.IsNullOrWhiteSpace(typeName))
                return (IRenderingContentsResolver)null;
            Type typeInfo = ReflectionUtil.GetTypeInfo(typeName);
            if (typeInfo != (Type)null && typeof(IRenderingContentsResolver).IsAssignableFrom(typeInfo) && ActivatorUtilities.GetServiceOrCreateInstance(this.ServiceProvider, typeInfo) is IRenderingContentsResolver orCreateInstance)
            {
                CheckboxField field2 = (CheckboxField)targetItem.Fields["IncludeServerUrlInMediaUrls"];
                if (field2 != null)
                    orCreateInstance.IncludeServerUrlInMediaUrls = field2.Checked;
                CheckboxField field3 = (CheckboxField)targetItem.Fields["UseContextItem"];
                if (field3 != null)
                    orCreateInstance.UseContextItem = field3.Checked;
                Field field4 = targetItem.Fields["ItemSelectorQuery"];
                if (field4 != null)
                    orCreateInstance.ItemSelectorQuery = field4.Value;
                Field field5 = targetItem.Fields["{9EDD2FCC-04AE-4230-84B4-C46C963F2284}"];
                if (field5 != null)
                    orCreateInstance.Parameters = WebUtil.ParseUrlParameters(field5.Value);
                return orCreateInstance;
            }
            Log.Warn("[Layout Service] Rendering contents resolver '" + typeName + "' could not be resolved or is not correct type.", (object)this);
            return (IRenderingContentsResolver)null;
        }
    }
}