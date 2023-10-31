import {PRODUCT_LIST, SEARCH_PRODUCT} from "./constant";

export const productList =  () =>{
    console.warn("Action is called");
    return {
        type: PRODUCT_LIST ,
        
    }
}

export const productsearch =  (query) =>{
    return {
        type: SEARCH_PRODUCT ,
        query  
    }
}

