import React from "react"
import PropTypes from 'prop-types'

import './product-list-item.css'

/* деструктуризаціяж: массив розбивається на змінні
const user ={
    name:"Ivan",
    age: 20,
}

const{
    name,
    age,
} = user;

console.log(name); */


const ProductListItem = ({
    name,
    description,
    type,
    capacity,
    price,
    img,
}) =>{

    const [count, setCount] = useState(1);

    return(
        <div className="product-list-item">
            <div className = "product-img">
                <img src={img} alt ={name}/>
            </div>
            <div className="product-title">{name}</div>
            <div className="product-description">{description}</div>
            <div className="product-features">Type: {type}</div>
            <div className="product-features">Capacity: {capacity} GB</div>
            <div className="product-quantity"> 
            <button onClick={() => setCount(count-1)}>-</button>
            <input type="text" value={count} readOnly/>
            <button onClick={() => setCount(count+1)}>+</button>
            </div>
            <div className="product-price"> $ {price}</div>
            <button className="btn-add-to-cart">Add to cart</button>
        </div>
        )
}
ProductListItem.propTypes = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    type:PropTypes.string.isRequired,
    capacity:PropTypes.number.isRequired,
    price:PropTypes.number.isRequired,
}
ProductListItem.defaultProps ={
    description:" no description ... ",
    img:"images/default-img.png",
}



export default ProductListItem