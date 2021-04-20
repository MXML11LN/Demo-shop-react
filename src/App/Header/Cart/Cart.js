
import React from "react"
import { keys } from "lodash"
import { Link } from "react-router-dom"
import products,{getProductsObject} from "../../Main/Products/products"
import "./cart.css"



const Cart = ({
    productsInCart,
    productsObject = getProductsObject(products),
}) => {
    return(
        <div className="cart text-center">
            {
                keys(productsInCart).map(id=>(
                    <div key={id}>{productsObject[id].name} : {productsInCart[id]}</div> 
                ))
            }
            <div>
                Total: {
                keys(productsInCart).reduce((total,id)=>(
                    total +(productsInCart[id] * productsObject[id].price)
                ),0)
            } $
            </div>
            <Link to="/cart">Show Cart</Link>
        </div>
    ) 
}
export default Cart