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
interface Search_PreviewSearchProps {
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
export const Search_PreviewSearchComponent = ({
  defaultItemsPerPage = 6,
  itemRedirectionHandler,
  submitRedirectionHandler,
}: Search_PreviewSearchProps) => {
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
      >
        <PreviewSearch.Input onChange={keyphraseHandler} autoComplete="off" placeholder="Type to search..." />
      </form>
      <PreviewSearch.Content ref={widgetRef}>
        <Presence present={loading}>
          <div>
            <svg aria-busy={loading} aria-hidden={!loading} focusable="false" role="progressbar" viewBox="0 0 20 20">
              <path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z" />
            </svg>
          </div>
        </Presence>
        <Presence present={!loading}>
          <PreviewSearch.Results defaultQueryResult={queryResult}>
            {({ isFetching: loading, data: { content: articles = [] } = {} }) => (
              <PreviewSearch.Items data-loading={loading}>
                <Presence present={loading}>
                  <div>
                    <svg
                      aria-busy={loading}
                      aria-hidden={!loading}
                      focusable="false"
                      role="progressbar"
                      viewBox="0 0 20 20"
                    >
                      <path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z" />
                    </svg>
                  </div>
                </Presence>
                {!loading &&
                  articles.map((article, index) => (
                    <PreviewSearch.Item key={article.id} asChild>
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
                      >
                        <ArticleCard.Root>
                          <div>
                            <ArticleCard.Image src={article.image_url} />
                          </div>
                          <ArticleCard.Title>{article.name}</ArticleCard.Title>
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
const Search_PreviewSearchWidget = widget(Search_PreviewSearchComponent, WidgetDataType.PREVIEW_SEARCH, 'content');
export default Search_PreviewSearchWidget;
