import { object } from "prop-types";
import React from "react"
import "./cart.css"

const Cart = ({
    productsInCart
}) => {
    console.log(productsInCart);
    return(
        <div className="cart text-center">
		    {
                Object.keys(productsInCart).map(id=>(
                   <div>{id}:{productsInCart[id]}</div> 
                ))
            }
        </div>
    ) 
}
export default Cart 