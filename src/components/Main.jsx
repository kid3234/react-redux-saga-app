import { addtocart, removeFromCart, emptyCart } from '../redux/action';
import { useDispatch } from 'react-redux'
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Main() {
    const data = useSelector((state) => state.ProductReducer)
    console.warn("this is the main data from store", data);

    const dispatch = useDispatch();
  
useEffect(()=>{
    dispatch(productList())
},[])

    return (
        <div>
            <div>
                <button onClick={() => dispatch(emptyCart())}>empty Cart</button>
            </div>
            <div className="product-container">

                {
                    data.map((item) => <div className='product-item' >
                        <img src={item.Photo} alt='image' />

                        <div>
                            <div>Name : {item.name} </div>
                            <div>Color : {item.color} </div>
                            <div>Price : {item.price} </div>
                            <div>Catagory : {item.catagory} </div>
                            <div>Brand : {item.brand} </div>

                            <div className='btn'>
                                <button onClick={() => dispatch(addtocart(item))}>ADD TO CART</button>
                                <button onClick={() => dispatch(removeFromCart(item.id))}>REMOVE FROM CART</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
}

export default Main;