import React from 'react'
import Search_SearchResultsWidget from './Search_SearchResults'
import { useRouter } from 'next/router';
import { IsSearchEnable } from 'lib/search';

export default function SearchResultsComponent() {
    const router = useRouter();
    const query: string = (router?.query['q'] as string) ?? '';
    const currentPage: number = parseInt(router?.query['p'] as string) || 1;
    return (
        <>{IsSearchEnable() ? (
            <Search_SearchResultsWidget rfkId="rfkid_7" initialKeyphrase={query} currentPage={currentPage} />
        ) : <><h1>Search is disabled</h1></>
        }
        </>
    )
}
