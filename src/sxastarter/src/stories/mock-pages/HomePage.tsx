import { ComponentRendering, ImageField, LinkField, RichTextField, TextField } from '@sitecore-jss/sitecore-jss-nextjs'
import AppNavigation from 'components/AppNavigation'
import FeatureHeading from 'components/FeatureHeading'
import Footer from 'components/Footer'
import Hero from 'components/Hero'
import React from 'react'

type HomePageProps = {
    homePageFields : {
        AppLogo: LinkField;
        Links: any;
    },
    footerFields: {
        rendering: ComponentRendering;
        fields: {
            FooterLogo: ImageField;
            Links: any;
            Socials: any;
        };
    },
    heroFields: {
        fields: {
            BackImage: ImageField;
            Buttons: any;
            Desc: RichTextField;
            Title: TextField;
        },
        rendering: ComponentRendering;
        params: any;
    },
    featureHeadingFields: {
        fields: {
            Title: TextField;
            Desc: RichTextField
          },
          params: any
    },
    tabsFields: {
        fields: {
            HeaderComponents: any;
            PanelComponents: any;
          },
          params: any;
    }
}

export default function HomePage(props: HomePageProps) {
  return (
    <>
        <AppNavigation fields={props.homePageFields}></AppNavigation>
        <Hero fields={props.heroFields.fields} rendering={props.heroFields.rendering} params={props.heroFields.params}></Hero>
        <FeatureHeading fields={props.featureHeadingFields.fields} params={props.featureHeadingFields.params}></FeatureHeading>
        {/* <Tabs sitecoreContext={null} fields={props.tabsFields.fields} params={props.tabsFields.params}></Tabs> */}
        <Footer fields={props.footerFields.fields} rendering={props.footerFields.rendering}></Footer>
    </>
  )
}
