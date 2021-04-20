
import React from "react"
import { Link } from "react-router-dom"
import products,{getProductsObject} from "../../Main/Products/products"
import "./cart.css"
import CartTotal from "../../../Components/Cart/CartTotal"
import CartProductList from "../../../Components/Cart/CartProductList"



const Cart = ({
    productsInCart,
    productsObject = getProductsObject(products),
}) => {
    return(
        <div className="cart text-center">
            <CartProductList
                productsInCart={productsInCart}
            />
            <CartTotal
                productsInCart={productsInCart}
            />
            <Link to="/cart">Show Cart</Link>
        </div>
    ) 
}
export default Cart