
const AUTH_URL = "https://api.cert.tastyworks.com/sessions";

const SEARCH_URL = "https://api.tastyworks.com/symbols/search/"
const QUOTE_TOKEN_URL = "https://api.tastyworks.com/api-quote-tokens"

import axios from 'axios';
  import { UserAuthStore } from '$lib/stores'

export const authenticateUser = (creds, success, err) => axios.post(
    AUTH_URL,
    creds
).then(res=>{
    UserAuthStore.update(()=>{
     return res.data.data;
    });
    success();
}).catch(err)


export const searchSymbols = (query,success,err) => axios.get(
      SEARCH_URL + query
    ).then(
        res => success( res.data.data.items )
    ).catch(err)

export const getQuoteToken = (success,err) => axios.get(
   QUOTE_TOKEN_URL
).then(result=> {
    console.log(result)
    success(result.data)
}).catch(err);
