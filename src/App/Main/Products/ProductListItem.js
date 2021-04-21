import React, { Component } from "react"
import PropTypes from 'prop-types'

import './product-list-item.css'
import Quantity from "../../../Components/Quantity/Quantity"

class ProductListItem extends Component{

    state ={
        productCount:1,
    }

    onIncrementClick = () => {
        this.setState((prevState) =>({
            productCount:prevState.productCount+1
        }))
    }

    onDecrementClick = () => { 
        this.setState((prevState) =>({
            productCount:prevState.productCount-1
        }))
    }
    render(){
        const{
            id,
            image,
            name,
            description,
            type,
            capacity,
            price,
            addProductToCart
        } = this.props;
    return(
        <div className="product-list-item">
            <div className = "product-img">
                <img src={image} alt ={name}/>
            </div>
            <div className="product-title">{name}</div>
            <div className="product-description">{description}</div>
            <div className="product-features">Type: {type}</div>
            <div className="product-features">Capacity: {capacity} GB</div>
            <Quantity
                productCount={this.state.productCount}
                onIncrementClick={this.onIncrementClick}
                onDecrementClick={this.onDecrementClick}
            />
            <div className="product-price"> $ {price}</div>
            <button 
                onClick={() => addProductToCart(id,this.state.productCount)}
                className="btn-add-to-cart">Add to cart</button>
        </div>
        )
    }
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
    image:"images/default-img.png",
}



export default ProductListItem