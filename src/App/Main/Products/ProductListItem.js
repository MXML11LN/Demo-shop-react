import React from "react"

import './product-list-item.css'

/* деструктуризаціяж: массив розбивається на змінні */
const user ={
    name:"Ivan",
    age: 20,
}

const{
    name,
    age,
} = user;

console.log(name);


const ProductListItem = ({
    name,
    description,
    type,
    capacity,
    price,
}) =>{
    return(
        <div className="product-list-item">
            <div className="product-title">{name}</div>
            <div className="product-description">{description}</div>
            <div className="product-features">Type: {type}</div>
            <div className="product-features">Capacity: {capacity} GB</div>
            <div className="product-price"> $ {price}</div>
            <button className="btn-add-to-cart">Add to cart</button>
        </div>
        )
}
export default ProductListItem