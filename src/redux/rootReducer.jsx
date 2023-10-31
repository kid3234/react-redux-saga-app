import {combineReducers} from'redux'
import { cartData } from './reducer'
import { ProductReducer } from './productReducer'


export default combineReducers({
cartData,
ProductReducer,
})