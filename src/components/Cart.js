import { useDispatch, useSelector } from "react-redux"
import ItemList from "./itemsList"
import { clearCart } from "../utils/cartSlice"

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="CartCom">
            <h1>Cart</h1>
            <div className="CartComItem">

                <button className="bt2" onClick={handleClearCart}>Clear Cart</button>
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart