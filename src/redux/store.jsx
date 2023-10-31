// import {createStore} from 'redux'
import rootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import productSaga from './productsaga';
import createSagaMiddleware from 'redux-saga'

// const sotre = createStore(rootReducer)
const sagaMidleware =createSagaMiddleware();


const store = configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMidleware]
})
sagaMidleware.run(productSaga);
export default store