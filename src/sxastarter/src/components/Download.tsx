import React from 'react'
import CtaBanner from './controls/molecules/CtaBanner';

type DownloadProps = {
  fields : {
    CtaBanners: any
  }
  params: any;
}

function Download(props: DownloadProps) {
  console.log("Download", props);

  const clickMe = () => {
    alert("Clicked");
  }
  return (
    <section id="download-boxes" className="py-32">
      {/* <!-- Boxes Container --> */}
      <div className={props?.params?.ComponentClass}>
        {/* <!-- Box 1 --> */}        
        {props.fields?.CtaBanners?.map((cta: any, index: number) => (
          <>
            {cta?.fields?.DivClass?.value?.length > 0 ? <>
              <div className="w-full md:w-1/3" key={index}>          
                <CtaBanner 
                  componentClassName={cta.fields?.ComponentClass?.value}
                  ctaButtonClassName={cta.fields?.CtaButtonClass?.value}
                  ctaCallBack={clickMe} ctaTitle= {cta.fields?.CtaTitle?.value} subTitle={cta.fields?.SubTitle?.value} imgSrc={cta.fields?.Image?.value?.src}
                  title={cta.fields?.Title?.value}></CtaBanner>
              </div>
            </>: <>
            <CtaBanner key={index}
                  componentClassName={cta.fields?.ComponentClass?.value}
                  ctaButtonClassName={cta.fields?.CtaButtonClass?.value}
                  ctaCallBack={clickMe} ctaTitle= {cta.fields?.CtaTitle?.value} subTitle={cta.fields?.SubTitle?.value} imgSrc={cta.fields?.Image?.value?.src}
                  title={cta.fields?.Title?.value}></CtaBanner>
            </>}
          </>
        ))}        
      </div>
    </section>
  )
}

export default Download;