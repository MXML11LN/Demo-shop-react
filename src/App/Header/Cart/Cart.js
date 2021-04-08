
import React from "react"
import {keys} from "lodash"
import products from "../../Main/Products/products"
import "./cart.css"

const Cart = ({
    productsInCart
}) => {
    console.log(productsInCart);
    return(
        <div className="cart text-center">
		    {
                keys(productsInCart).map(id=>(
                   <div key={id}>{products[id - 1].name} : {productsInCart[id]}</div> 
                ))
            }
        </div>
    ) 
}
export default Cart 