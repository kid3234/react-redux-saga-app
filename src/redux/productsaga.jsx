import {takeEvery,put} from 'redux-saga/effects'
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from './constant'


function* getProducts(){
   
    let data = yield fetch("http://localhost:3001/products")
    data = yield data.json()
console.warn("this is get saga",data);

yield put({type:SET_PRODUCT_LIST,data})
}


function* searchProduct(data){
   
  let result = yield fetch(`http://localhost:3001/products?q=${data.query}`)
  result = yield result.json()
console.warn("this is search saga",result);

yield put({type:SET_PRODUCT_LIST,data:result})
}

function* productSaga (){

  yield  takeEvery(PRODUCT_LIST,getProducts)
  yield takeEvery(SEARCH_PRODUCT,searchProduct)

}

export default productSaga