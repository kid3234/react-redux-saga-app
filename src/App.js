import logo from './logo.svg';
import './App.css';
import { addtocart } from './redux/action';
import {useDispatch} from 'react-redux'

function App() {
  const dispatch = useDispatch();
  const product ={
    name:'iphone',
    catagory:'mobile',
    Price:100,
    color:'red'
  }
  return (
    <div className="App">
     <button onClick={()=> dispatch(addtocart(product))}>Add to cart</button>
    </div>
  );
}

export default App;
