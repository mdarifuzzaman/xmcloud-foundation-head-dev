using System;
using Microsoft.Extensions.DependencyInjection;
using Sitecore;
using Sitecore.Data;
using Sitecore.Data.ItemResolvers;
using Sitecore.Data.Items;
using Sitecore.DependencyInjection;
using Sitecore.Globalization;

namespace XmCloudSXAStarter.Helpers
{
    public class MeccaContentService
    {
        private readonly ItemPathResolver _itemPathResolver;

        public MeccaContentService()
            : this(ServiceLocator.ServiceProvider.GetService<ItemPathResolver>())
        {
        }

        public MeccaContentService(ItemPathResolver itePathResolver)
        {
            _itemPathResolver = itePathResolver;
        }

        public bool TryResolveItem(Database database,
            string inputPathOrIdOrShortId,
            Language language,
            DateTime? date,
            out Item item)
        {
            if (database == null)
            {
                item = null;
                return false;
            }

            if ((object)language == null)
                language = Context.ContentLanguage ?? Context.Language;

            var shouldGetItemById = TryResolveId(inputPathOrIdOrShortId, out var itemId);

            item = shouldGetItemById
                ? database.GetItem(itemId, language)
                : database.GetItem(inputPathOrIdOrShortId, language);

            // retrieve the correct version if date is specified
            if (!date.HasValue) return item != null;
            item = item?.Publishing.GetValidVersion(date.Value, false);

            return item != null;
        }

        public bool TryResolveId(string inputPathOrIdOrShortId, out ID result)
        {
            result = null;
            if (string.IsNullOrWhiteSpace(inputPathOrIdOrShortId))
                return false;

            if (!ShortID.TryParse(inputPathOrIdOrShortId, out var result1))
                return ID.TryParse(inputPathOrIdOrShortId, out result);
            result = result1.ToID();

            return true;
        }

        public Item ResolveItemByPath(string path, Item rootItem)
        {
            return _itemPathResolver.ResolveItem(path, rootItem);
        }
    }
}