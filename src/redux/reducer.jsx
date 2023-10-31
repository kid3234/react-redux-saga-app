import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";
export const cartData = (data = [], action) => {
    console.warn("reduser called", action);

    switch (action.type) {
        case ADD_TO_CART:
            console.warn("ITEM ADDED", action);
            return [action.data, ...data]
        case REMOVE_FROM_CART:
            console.warn("ITEM REMOVED", action);
            console.warn("removed data", data);
            //  data.length = data.length ? data.length - 1: []
      const remainingItem = data.filter((item)=> item.id !== action.data)
      console.log("the Item with id: ",action.data," is removed");
            return [...remainingItem]
        case EMPTY_CART:
            console.warn("Cart is empty", action);
            data = []
            return [...data]
        default:
            return data
    }


}
