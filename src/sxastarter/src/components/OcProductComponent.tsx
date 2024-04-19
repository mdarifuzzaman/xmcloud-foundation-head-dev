import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { useContext, useEffect, useState } from 'react';
import { StorefrontContext } from 'src/StorefrontContext';

type OcProductComponentProps = ComponentProps & {
  fields: {
    heading1: Field<string>;
    heading2: Field<string>;
    heading3: Field<string>;
    productPerPage: Field<number>;
    totalPage: Field<number>;
  };
  rendering: any
};

const OcProductComponent = (props: OcProductComponentProps): JSX.Element => {
  const commerceContext = useContext(StorefrontContext);
  const { defaultProducts } = commerceContext;
  const [page1, setPage1] = useState(Array<any>());
  const [page2, setPage2] = useState(Array<any>());
  const [page3, setPage3] = useState(Array<any>());

  const registerEvent = (e: any) => {
    console.log(e);
    console.log("Eligible customer's data sent..");
  }
  useEffect(() => {
    const eachPage = props.fields.productPerPage.value;

    const firstPage = eachPage;
    const secondPage = eachPage * 2;
    const thirdPage = eachPage * 3;

    const page1Data = new Array<any>();
    const page2Data = new Array<any>();
    const page3Data = new Array<any>();

    let counter = 1;
    defaultProducts.forEach((product: any) => {  
      console.log(counter);
      if(counter >= 1 && counter <= firstPage){
        page1Data.push(product);
      }

      if(counter > firstPage && counter <= secondPage){
        page2Data.push(product);
      }

      if(counter > secondPage && counter <= thirdPage){
        page3Data.push(product);
      }
      counter = counter + 1;

    });

    setPage1(page1Data);
    setPage2(page2Data);
    setPage3(page3Data);

  }, [defaultProducts])

  return (
    <div className="design_section layout_padding">
         <div id="my_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <h1 className="design_taital">{<Text field={props.fields.heading1}></Text>}</h1>
                     <div className="design_section_2">
                        <div className="row">
                          {page1 && page1.map((pro: any,index: number) => (
                            <div className="col-md-4" key={index}>
                              <div className="box_main">
                                <p className="chair_text">{pro.Name}</p>
                                <div className="image_3"><img src = { pro.xp.Images[0].Url }></img></div>
                                <p className="chair_text">Price ${pro.Price}</p>
                                <div className="buy_bt"><a href="#">Buy Now</a></div>
                              </div>
                            </div>
                          ))}                           
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <h1 className="design_taital">{<Text field={props.fields.heading2}></Text>}</h1>
                     <div className="design_section_2">
                        <div className="row">
                          {page2 && page2.map((pro: any,index: number) => (
                            <div className="col-md-4" key={index}>
                              <div className="box_main">
                                <p className="chair_text">{pro.Name}</p>
                                <div className="image_3"><img src = {pro.xp.Images[0].Url }></img></div>
                                <p className="chair_text">Price ${pro.Price}</p>
                                <div className="buy_bt"><a href="#">Buy Now</a></div>
                              </div>
                            </div>
                          ))}
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <h1 className="design_taital">{<Text field={props.fields.heading3}></Text>}</h1>
                     <div className="design_section_2">
                        <div className="row">
                          {page3 && page3.map((pro: any,index: number) => (
                            <div className="col-md-4" key={index}>
                              <div className="box_main">
                                <p className="chair_text">{pro.Name}</p>
                                <div className="image_3"><img src = { pro.xp.Images[0].Url}></img></div>
                                <p className="chair_text">Price ${pro.Price}</p>
                                <div className="buy_bt"><a href="#">Buy Now</a></div>
                              </div>
                            </div>
                          ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
            <i className="fa fa-long-arrow-left" style={{fontSize: "24px"}}></i>
            </a>
            <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
            <i className="fa fa-long-arrow-right" style={{fontSize: "24px"}}></i>
            </a>
         </div>
         <div className="container">
            <div className="read_bt"><a href="#" onClick={e => registerEvent(e)}>Read More</a></div>
         </div>
      </div>
  );
}

export default withDatasourceCheck()<OcProductComponentProps>(OcProductComponent);
