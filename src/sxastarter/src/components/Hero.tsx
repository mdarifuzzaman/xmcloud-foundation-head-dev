import {
  ComponentConsumerProps,
  ComponentRendering,
  Image,
  ImageField,
  RichTextField,
  Text,
  TextField,
  withSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import AParagraph from './controls/atoms/AParagraph';
import AButton from './controls/atoms/AButton';
import AButtonGroup from './controls/atoms/AButtonGroup';
import { useState } from 'react';
import { context } from 'lib/context';

declare global {
  interface Window {
    mootrack: (param1: any, param2: any) => void;
  }
}

type ContentBlockProps = ComponentConsumerProps &{
  rendering: ComponentRendering;
  fields: {
    BackImage: ImageField;
    Buttons: any;
    Desc: RichTextField;
    Title: TextField;

  };
  params: any
};

const Hero = (props: ContentBlockProps): JSX.Element => {
  const [isAlreadyRegister, setIsAlreadyRegister] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [amount, setAmount] = useState("");
  const signup = () => {
    console.log(emailAddress);
    window.mootrack('identify', emailAddress);    
    window.mootrack('signupCompleted', { "CustomerId": "00001", "ReferenceNo": "Ref123456", "Email": `${emailAddress}` });
    console.log("Eligible customer's data sent..");
    setIsAlreadyRegister(true);
    context
      .getSDK('Events')
      .then((e) =>
        {
          const eventData = {
            channel: "WEB",
            currency: "EUR",
            pointOfSale: "xmcloud-dev-collection",
            language: "EN",
            page: "home",
            email: emailAddress,
            identifiers: [
                {
                    id: emailAddress,
                    provider: "email"
                }
            ]
          };

          e.identity(eventData);     
          console.log("Sent to CDP");          
        }
      )
      .catch((e) => console.log(e));
  }

  const createOrder = () => {
    if(!emailAddress || emailAddress.length === 0 || !amount || amount.length === 0){
      alert("Email or amount is missing..");
      return;
    }

    console.log(emailAddress);
    console.log("Eligible customer's data sent..");
    setIsAlreadyRegister(true);
    context
      .getSDK('Events')
      .then((e) =>
        {
          const eventData = {
            channel: "WEB",
            currency: "EUR",
            pointOfSale: "xmcloud-dev-collection",
            language: "EN",
            page: "home",
            email: emailAddress,
            identifiers: [
                {
                    id: emailAddress,
                    provider: "email"
                }
            ]
          };

          e.identity(eventData);     
          console.log("Sent to CDP");    

          const orderData = {
            channel: "WEB",
            currency: "EUR",
            pointOfSale: "xmcloud-dev-collection",
            language: "EN",
            page: "checkout page",
            order: {
              referenceId: "B94TXY-1",
              orderedAt: "2024-08-23T16:17:16.000Z",
              status: "PURCHASED",
              currencyCode: "EUR",
              price: 200,
              paymentType: "Card",
              cardType: "Visa",
              extensions: [
                {
                  name: "ext",
                  key: "default",
                  refundable: true,
                },
              ],
              orderItems: [
                {
                  type: "MOBILE_PHONE",
                  referenceId: "B94TXY-1",
                  orderedAt: "2024-08-23T16:17:16.000Z",
                  status: "PURCHASED",
                  currencyCode: "EUR",
                  price: 200,
                  name: "Mobile phone of type x",
                  productId: "MOBILE_PHONE_TYPE_X",
                  quantity: 1,
                  extensions: [
                    {
                      name: "ext",
                      key: "default",
                      phoneColor: "Gold",
                      insurance: false,
                    },
                  ],
                },
              ],
            },
          }
          
          e.event('ORDER_CHECKOUT', orderData).then(res => {
            console.log("ORDER_CHECKOUT response", res)
          });
          console.log("ORDER_CHECKOUT done.")
        }


      )
      .catch((e) => console.log(e));
  }

  const addProduct = () => {
    context
      .getSDK('Events')
      .then((e) =>
        {
          const eventData = {
            channel: "WEB",
            currency: "EUR",
            pointOfSale: "myretailsite/ireland",
            language: "EN",
            page: "products",
            product: {
                name: "GHT 84 Lace Sneaker",
                type: "FOOTWEAR",
                item_id: "SHOES_8475GHT",
                productId: "example_product_id",
                referenceId: "FOOTWEAR-001-01",
                orderedAt: "2024-04-15T12:42:16.001Z",
                quantity: 1,
                price: 7.99,
                currency: "EUR",
                originalPrice: 7.79,
                originalCurrencyCode: "USD"
            }
        };

          e.event("ADD", eventData);     
          console.log("Sent to CDP > add product data");          
        }
      )
      .catch((e) => console.log(e));
  }
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
    
        <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
          <h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
            <Text field={props.fields.Title}></Text>
          </h1>
          <AParagraph componentClass="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0"
            desc={props.fields.Desc.value}></AParagraph>

          <AButtonGroup componentClass="flex items-center justify-center w-full space-x-4 lg:justify-start">
            {props.fields.Buttons?.map((button: any, index: number) =>(
              <AButton onClick={addProduct} key={index} className={button?.fields?.ClassName?.value} title={button?.fields?.Title?.value}></AButton>  
            ))}            
          </AButtonGroup>  
          {!isAlreadyRegister ? <div>
            <input type="email" placeholder="enter your email for registration" onChange={(e) => setEmailAddress(e.target.value)}></input>  
            <button onClick={() => signup()} className="ml-3 flex flex-col items-center justify-center">Signup for newsletter</button>
          </div> : null }        
        </div>

        <div>
          <input type="amount" placeholder="enter your amount" onChange={(e) => setAmount(e.target.value)}></input>  
          <button onClick={() => createOrder()} className="ml-3 flex flex-col items-center justify-center">Create Order</button>
        </div> 

        <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
          <div className="bg-hero"></div>
          {
           props.sitecoreContext?.pageEditing? <Image imageParams={{ mw: 100, mh: 50 }} field={props.fields?.BackImage}></Image> :
            <img src={ props.fields.BackImage.value?.src } alt="" 
              className={props.params.BackgroundImageClass} />
          }
        </div>
      </div>
    </section>
  );
};

export default withSitecoreContext()<ContentBlockProps>(Hero);
