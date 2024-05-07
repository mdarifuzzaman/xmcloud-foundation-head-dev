import type { ChangeEvent } from 'react';
import { useCallback } from 'react';

import type { PreviewSearchInitialState } from '@sitecore-search/react';
import { WidgetDataType, usePreviewSearch, widget } from '@sitecore-search/react';
import { ArticleCard, Presence, PreviewSearch } from '@sitecore-search/ui';


type ArticleModel = {
  id: string;
  name: string;
  image_url: string;
  url: string;
  source_id?: string;
};
type InitialState = PreviewSearchInitialState<'itemsPerPage'>;
interface Search_Preview_CssProps {
  defaultItemsPerPage: number | 6;

  /**
   * An optional custom redirection handler that will be called when the user clicks on an article.
   * You can use your own redirection logic here, or any other side effect.
   * Examples
   * * (article: Article) => history.push(`/search?q=${article.id}`);
   * * (article: Article) => window.location.href = `/search?q=${article.id}`;
   * * (article: Article) => setRoute(`/custom/search/endpoint?q=${article.id}`);
   * @param article The article that was clicked.
   */
  itemRedirectionHandler?: (article: ArticleModel) => void;

  /**
   * An optional custom submit handler that will be called when the user submits the form by pressing the enter key.
   * You can use your own submit logic here, or any other side effect.
   * Most common use case is to redirect the user to a custom search page with the query string.
   * Examples
   * * (query: string) => history.push(`/search?q=${query}`);
   * * (query: string) => window.location.href = `/search?q=${query}`;
   * * (query: string) => setRoute(`/custom/search/endpoint?q=${query}`);
   * @param query The query string that was submitted.
   */
  submitRedirectionHandler?: (query: string) => void;
}
export const Search_Preview_CssComponent = ({
  defaultItemsPerPage = 6,
  itemRedirectionHandler,
  submitRedirectionHandler,  
}: Search_Preview_CssProps) => {
  const {
    widgetRef,
    actions: { onItemClick, onKeyphraseChange },
    queryResult,
    queryResult: { isFetching, isLoading },
  } = usePreviewSearch<ArticleModel, InitialState>({
    state: {
      itemsPerPage: defaultItemsPerPage,
    },
  });
  const loading = isLoading || isFetching;
  const keyphraseHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const target = event.target;
      onKeyphraseChange({
        keyphrase: target.value,
      });
    },
    [onKeyphraseChange],
  );
  return (    
    <PreviewSearch.Root>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const { value: query } = e.currentTarget.elements[0] as HTMLInputElement;
          submitRedirectionHandler && submitRedirectionHandler(query);
        }}
        className="sitecore-preview-search-form"
      >
        <PreviewSearch.Input
          onChange={keyphraseHandler}
          autoComplete="off"
          placeholder="Search your content..."
          className="sitecore-preview-search-input"
        />
      </form>
      <PreviewSearch.Content ref={widgetRef} className="sitecore-preview-search-content">
        <Presence present={loading}>
          <div className="sitecore-loader-container">
            <svg
              aria-busy={loading}
              aria-hidden={!loading}
              focusable="false"
              role="progressbar"
              viewBox="0 0 20 20"
              className="sitecore-loader-animation"
            >
              <path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z" />
            </svg>
          </div>
        </Presence>
        <Presence present={!loading}>
          <PreviewSearch.Results defaultQueryResult={queryResult}>
            {({ isFetching: loading, data: { content: articles = [] } = {} }) => (
              <PreviewSearch.Items data-loading={loading} className="sitecore-preview-search-items">
                <Presence present={loading}>
                  <div className="sitecore-loader-container">
                    <svg
                      aria-busy={loading}
                      aria-hidden={!loading}
                      focusable="false"
                      role="progressbar"
                      viewBox="0 0 20 20"
                      className="sitecore-loader-animation"
                    >
                      <path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z" />
                    </svg>
                  </div>
                </Presence>
                {!loading &&
                  articles.map((article, index) => (
                    <PreviewSearch.Item key={article.id} asChild className="sitecore-preview-search-item">
                      <a
                        href={article.url}
                        onClick={(e) => {
                          e.preventDefault();
                          // onItemClick is for tracking purposes.
                          onItemClick({
                            id: article.id,
                            index,
                            sourceId: article.source_id,
                          });
                          itemRedirectionHandler && itemRedirectionHandler(article);
                        }}
                        className="sitecore-preview-search-link"
                      >
                        <ArticleCard.Root className="sitecore-article-root">
                          <div className="sitecore-article-image-wrapper">
                            <ArticleCard.Image src={article.image_url} className="sitecore-article-image" />
                          </div>
                          <ArticleCard.Title className="sitecore-article-name">{article.name}</ArticleCard.Title>
                        </ArticleCard.Root>
                      </a>
                    </PreviewSearch.Item>
                  ))}
              </PreviewSearch.Items>
            )}
          </PreviewSearch.Results>
        </Presence>
      </PreviewSearch.Content>
    </PreviewSearch.Root>
  );
};
const Search_Preview_CssWidget = widget(Search_Preview_CssComponent, WidgetDataType.PREVIEW_SEARCH, 'content');
export default Search_Preview_CssWidget;
