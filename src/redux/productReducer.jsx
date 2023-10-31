import {PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";
export const ProductReducer = (data = [], action) => {
    console.log("product reduser called", action);

    switch (action.type) {
        case SET_PRODUCT_LIST:
            console.warn("seting product list", action);
            return [...action.data]
        default:
            return data
    }


}
