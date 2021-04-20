import React from "react"
import CartTotal from "../../../Components/Cart/CartTotal"
import CartProductList from "../../../Components/Cart/CartProductList"
import CartProductListItemExtended from "../../../Components/Cart/CartProductLicstItemExtended"


const CartPage = ({
    productsInCart,
}) => {
    return(
        <>
            <h1 className="page-title">Cart</h1>

            <CartProductList
            productsInCart={productsInCart}
            CartItem={CartProductListItemExtended}
            />
            <CartTotal
                productsInCart={productsInCart}
            />
        </>
    )
}

export default CartPage