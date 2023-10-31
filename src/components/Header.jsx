import React from "react";
import { useSelector ,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productsearch } from "../redux/productAction";

const Header = () => {
    const dispatch = useDispatch();
    const result = useSelector((state) => state.cartData);
    console.warn("data in the header", result);
    

    return (
        <div className="header">
            <Link to="/">
                <h3 className="logo">E-comers</h3>
            </Link>
            <div className="search-box">
                <input type="text" onChange={(event)=>dispatch(productsearch(event.target.value))} placeholder="search product" />
            </div>

            <Link to='/cart'>
                <div className="cart-div">
                    <span>{result.length}</span>
                    <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="cart_image" />
                </div>
            </Link>
        </div>
    )
}

export default Header