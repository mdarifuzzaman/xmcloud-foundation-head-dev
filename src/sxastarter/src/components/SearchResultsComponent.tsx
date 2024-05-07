import React from 'react'
import { useRouter } from 'next/router';
import { IsSearchEnable } from 'lib/search';
import Search_SearchResultComponentWidget from './sc_search_widgets/Search_SearchResultComponent/SearchResult';

export default function SearchResultsComponent() {
    const router = useRouter();
    const query: string = (router?.query['q'] as string) ?? '';
    const currentPage: number = parseInt(router?.query['p'] as string) || 1;
    return (
        <>{IsSearchEnable() ? (
            <Search_SearchResultComponentWidget key={"someKeys"} rfkId="rfkid_7" defaultItemsPerPage={8} defaultKeyphrase={query} defaultPage={currentPage} />
        ) : <><h1>Search is disabled</h1></>
        }
        </>
    )
}
