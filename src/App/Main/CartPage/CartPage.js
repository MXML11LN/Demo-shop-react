import React from "react"
import { Link } from 'react-router-dom'
import CartTotal from "../../../Components/Cart/CartTotal"
import CartProductList from "../../../Components/Cart/CartProductList"
import CartProductListItemExtended from "../../../Components/Cart/CartProductLicstItemExtended"


const CartPage = ({
    productsInCart,
    removeProductFromCart,
    changeProductCount,
}) => {
    return(
        <>
            <h1 className="page-title">Cart</h1>
            <CartProductList
            productsInCart={productsInCart}
            CartItem={CartProductListItemExtended}
            removeProductFromCart={removeProductFromCart}
            changeProductCount={changeProductCount}
            />
            <CartTotal
                productsInCart={productsInCart}
            />
            <div style={{margin:"20px auto"}}>
            <Link className="button-cart"to="/checkout">Proceed to Checkout</Link>
            </div>
        </>
    )
}

export default CartPage