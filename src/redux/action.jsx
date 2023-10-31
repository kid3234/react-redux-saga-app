import { ADD_TO_CART,EMPTY_CART,REMOVE_FROM_CART } from "./constant";

export const addtocart = (data) =>{
    console.warn("Action is called",data);
    return {
        type: ADD_TO_CART ,
        data

    }
}

export const removeFromCart = (data) =>{
    console.warn("remove Action is called",data);
    return {
        type: REMOVE_FROM_CART,
        data

    }
}


export const emptyCart = () =>{
    console.warn("Action is called");
    return {
        type: EMPTY_CART,
    }
}