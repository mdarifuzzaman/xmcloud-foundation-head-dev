import { useEffect, useState} from 'react'
import axios from 'axios';
import { remove, get, set} from 'local-storage';
import { Consts } from './Const';


import { createContext } from "react";

export const StorefrontContext = createContext<any>({});

export const StorefrontProvider = (props: any) => {
    const [token, setToken] = useState("");
    const [defaultProducts, setDefaultProducts] = useState([]);

    
    useEffect(() => {
        const initialize = async () => {
            getMiddlewareToken().then( async () => {                            
              await loadDefaultProducts();              
            });                  
          }
  
          initialize();
    }, []);

    const loadDefaultProducts = async () => {               
        const tokenToUse = get<any>("credDataAnnonymous").token;         
        const url = `${Consts.env.baseUrl}${Consts.urls.productUrl}`;

        const prodResponse = await axios.get(url, 
            {headers: {"Authorization": `Bearer ${tokenToUse}`}});
        console.log("prodResponse.data", prodResponse.data);            
        setDefaultProducts(prodResponse.data.Items);
    }

    const getMiddlewareToken = async (force = false) => {

        if(force){
            remove('credDataAnnonymous');
        }

        if(get('credDataAnnonymous') && get<any>('credDataAnnonymous').expired != null && new Date(get<any>('credDataAnnonymous').expired) <= new Date() ){
            return get<any>('credDataAnnonymous').token;
        }

        const baseUrl = Consts.env.baseUrl;
        const tokenEndpoint = `${baseUrl}${Consts.urls.token}`;
        const formdata = new FormData();
        //add three variable to form
        formdata.append("grant_type", "client_credentials");
        formdata.append("client_id", Consts.env.clientId);
        formdata.append("client_secret", Consts.env.clientSecret);
        formdata.append("scopes", "BuyerUserAdmin Shopper UserGroupAdmin AddressAdmin SpendingAccountAdmin BuyerAdmin ProductReader ProductAdmin CatalogReader CatalogAdmin CategoryReader CategoryAdmin PriceScheduleReader PriceScheduleAdmin SecurityProfileAdmin SetSecurityProfile OrderAdmin UnsubmittedOrderReader ShipmentAdmin PromotionAdmin ProductFacetAdmin ApprovalRuleAdmin BuyerImpersonation AdminUserReader AdminUserAdmin ApiClientReader ApiClientAdmin XpIndexAdmin");
        
        const tokenResponse = await axios.post(tokenEndpoint,
            formdata, {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            });
        console.log("client_cred_token", tokenResponse.data);
        const token = tokenResponse.data.access_token;
        setToken(token);
        set<any>("credDataAnnonymous", { token, expired: new Date().setHours(1)});      
        return token;
    }    
    return <StorefrontContext.Provider value={{ defaultProducts, token}}>
        {props.children}
    </StorefrontContext.Provider>
}




