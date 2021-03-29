
import React from "react"
import {keys} from "lodash"
import "./cart.css"

const Cart = ({
    productsInCart
}) => {
    console.log(productsInCart);
    return(
        <div className="cart text-center">
		    {
                keys(productsInCart).map(id=>(
                   <div>{id}:{productsInCart[id]}</div> 
                ))
            }
        </div>
    ) 
}
export default Cart 