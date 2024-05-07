import { ComponentConsumerProps, withSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs'
import { ArticleProps } from '@sitecore-search/ui'
import { useRouter } from 'next/router'
import React from 'react'
import Search_Preview_CssWidget from './sc_search_widgets/Search_Preview_Css/SearchPreviewCss'

type GlobalLinkProps =  ComponentConsumerProps &{
  fields? : {
    CtaBanners: any
  }
  params?: any;
}

const GlobalLink = () => {


  const router = useRouter();
  const submitAction = (articleModel:  ArticleProps) => {
    console.log("Submit action", articleModel);
    // Track search event
    //tracker.TrackEvent('SEARCH', { keywords });
    //router.push(articleModel.url + "").then(() => router.reload());
    router.push(articleModel.url + "");
  }

  const submitQueryAction = (query:  string) => {
    // Track search event
    //tracker.TrackEvent('SEARCH', { keywords });
    router.push('/search?q=' + query).then(() => router.reload());
  }

  return (
    <div className="mt-4">
      <Search_Preview_CssWidget rfkId="rfkid_6" defaultItemsPerPage={6} itemRedirectionHandler={submitAction} submitRedirectionHandler={submitQueryAction}></Search_Preview_CssWidget>
        {/* {props.sitecoreContext.pageEditing ? 
          <>
            <Link href={"/au/en?sc_site=" + props.sitecoreContext.site?.name}>Australia - En</Link> <br></br>
            <Link href={"/au/ja-JP?sc_site=" + props.sitecoreContext.site?.name}>Australia - ja-JP</Link><br></br>
            <hr></hr>
            <Link href={"/jp/en?sc_site=" + props.sitecoreContext.site?.name}>Japan - en</Link> <br></br>
            <Link href={"/jp/ja-JP?sc_site=" + props.sitecoreContext.site?.name}>Japan - ja-JP</Link>
          </>
        :
        <>
          <Link href="/au/en">Australia - En</Link> <br></br>
          <Link href="/au/ja-JP">Australia - ja-JP</Link><br></br>
          <hr></hr>
          <Link href="/jp/en">Japan - en</Link> <br></br>
          <Link href="/jp/ja-JP">Japan - ja-JP</Link>
        </>
        } */}
    </div>
  )
}
export default withSitecoreContext()<GlobalLinkProps>(GlobalLink);