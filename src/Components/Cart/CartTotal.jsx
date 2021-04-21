import React from "react"
import {keys} from "lodash"
import products, { getProductsObject } from "../../App/Main/Products/products"

const CartTotal = ({
    productsInCart,
    productsObject = getProductsObject(products),
}) => {
    return(
            <div style={{
                backgroundColor:"rgba(255,255,255,0.9)",
                padding:"15px",
                borderRadius:"0.95em",
                }}>
                Total: {
                keys(productsInCart).reduce((total,id)=>(
                    total +(productsInCart[id] * productsObject[id].price)
                ),0)
            } $
            </div>
    )
}

export default CartTotal