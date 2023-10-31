// import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
// import { productList } from "../redux/productAction"
const Cart = () => {
    const cartdata = useSelector((state) => state.cartData)
    const amount = cartdata.length && cartdata.map(item => item.price).reduce((prev,next) => prev+next)
    console.log(cartdata);
    return (
        <div>
            <div className="cart-page-c">
                <table>
                    <tr>
                        <td>Name</td>
                        <td>color</td>
                        <td>Price</td>
                        <td>Brand</td>
                        <td>catagory</td>
                        <td>quantity</td>
                    </tr>
                    {
                        cartdata.map((item) =>
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.color}</td>
                                <td>{item.price}</td>
                                <td>{item.brand}</td>
                                <td>{item.catagory}</td>
                                <td>quantity</td>
                            </tr>)
                    }
                </table>
                <div className="price-detail">
                    <div className="adjust-price">
                        <span>Amount</span>
                        <span>{amount}</span>
                    </div>
                    <div className="adjust-price"><span>Discount</span><span>{amount/10}</span></div>
                    <div className="adjust-price"><span>Tax</span><span>0</span></div>
                    <div className="adjust-price"><span>Total</span><span>{amount-(amount/10)}</span></div>
                </div>
            </div>

        </div >
    )
}

export default Cart