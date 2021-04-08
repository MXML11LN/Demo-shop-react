import React from "react"
import {keys} from "lodash"
import products from "../Products/products"

const productsObject = products.reduce((obj, product)=>({
    ...obj,
    [product.id]:product
}),{})

const CartPage = ({
    productsInCart
}) => {
    return(
        <>
            <h1 className="page-title">Cart</h1>

            {
                keys(productsInCart).map(id=>(
                    <div key={id}>{productsObject[id].name} : {productsInCart[id]} : {productsObject[id].price}</div> 
                ))
            }
            <div>
                Total: {
                keys(productsInCart).reduce((total,id)=>(
                    total +(productsInCart[id] * productsObject[id].price)
                ),0)
            } $
            </div>
        </>
    )
}

export default CartPage