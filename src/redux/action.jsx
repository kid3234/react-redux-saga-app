export const addtocart = (data) =>{
    console.warn("Action is called",data);
    return {
        type:'ADD_TO_CART',
        data

    }
}