import React from "react"

import './product-list-item.css'

const ProductListItem = (props) =>{
    console.log(props)
    return(
        <div className="product-list-item">
            <div className="product-title">{props.name}</div>
            <div className="product-description">{props.description}</div>
            <div className="product-features">Type: {props.type}</div>
            <div className="product-features">Capacity: {props.capacity}</div>
            <div className="product-price"> $ {props.price}</div>
            <button className="btn-add-to-cart">Add to cart</button>
        </div>
        )
}
export default ProductListItem