import {createStore} from 'redux'
const dummyReducer =()=>{
    return 100;
}
const sotre = createStore(dummyReducer)

export default sotre