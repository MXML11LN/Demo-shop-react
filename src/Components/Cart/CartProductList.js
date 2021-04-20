import React from "react"
import {keys} from "lodash"
import  products, { getProductsObject } from "../../App/Main/Products/products"

const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(products),
}) =>{
    return(
        <div>
            {
                keys(productsInCart).map(id=>(
                    <div key={id}>{productsObject[id].name} : {productsInCart[id]}</div> 
                ))
            }
        </div>
    )
}

export default CartProductList