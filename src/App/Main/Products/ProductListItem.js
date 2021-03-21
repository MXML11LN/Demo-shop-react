import React, { Component } from "react"
import PropTypes from 'prop-types'

import './product-list-item.css'

class ProductListItem extends Component{

    state ={
        productCount:1,
        color:"green",
    }

    onIncrementClick() {
        this.setState((prevState) =>({
            productCount:prevState.productCount +1
        }))
    }

    onDecrementClick() {
        this.setState((prevState) =>({
            productCount:prevState.productCount -1
        }))
    }
    changeColorClick(){
        this.setState({color:"red"})
    }

    render(){
        const{
            img,
            name,
            description,
            type,
            capacity,
            price
        } = this.props;
        console.log(this)
    return(
        <div className="product-list-item">
            <div className = "product-img">
                <img src={img} alt ={name}/>
            </div>
            <div className="product-title">{name}</div>
            <p>color:{this.state.color}</p>
            <button onClick = {() => this.changeColorClick()} >Change color</button>
            <div className="product-description">{description}</div>
            <div className="product-features">Type: {type}</div>
            <div className="product-features">Capacity: {capacity} GB</div>
            <div className="product-quantity"> 
            <button onClick={() => this.onDecrementClick()}>-</button>
            <input type="text" value={this.state.productCount} readOnly/>
            <button onClick={() => this.onIncrementClick()}>+</button>
            </div>
            <div className="product-price"> $ {price}</div>
            <button className="btn-add-to-cart">Add to cart</button>
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
    img:"images/default-img.png",
}



export default ProductListItem