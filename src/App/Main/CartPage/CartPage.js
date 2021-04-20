import React from "react"
import products,{ getProductsObject } from "../Products/products"
import CartTotal from "../../../Components/Cart/CartTotal"
import CartProductList from "../../../Components/Cart/CartProductList"


const CartPage = ({
    productsInCart,
    productsObject=getProductsObject(products),
}) => {
    return(
        <>
            <h1 className="page-title">Cart</h1>

            <CartProductList
            productsInCart={productsInCart}
            />
            <CartTotal
                productsInCart={productsInCart}
            />
        </>
    )
}

export default CartPage