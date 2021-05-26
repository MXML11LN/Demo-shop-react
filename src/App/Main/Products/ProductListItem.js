import React, { Component } from "react"
import { connect } from "react-redux"

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


    /*renderLike = () =>{
        const{
            isLiked,
            id,
            addLike,
            removeLike,
        } = this.props;

        if(isLiked) {
            removeLike(id)
        } else {
            addLike(id)
        }
    }*/
    render(){
        const{
            id,
            image,
            name,
            description,
            type,
            capacity,
            price,
            addProductToCart,
            isLiked = false,
            addLike,
            removeLike,
        } = this.props;
    return(
        <div className="product-list-item">
            <div className = "product-img">
                <img src={image} alt ={name}/>
            </div>
            <button onClick = {() => isLiked ? removeLike(id) : addLike(id)}>
                {isLiked ? <span>&#9829;</span> : <span>&#9825;</span>}
            </button>
            <div className="product-title">{name}</div>
            <div className="product-description">{description}</div>
            <div className="product-features">Type: {type}</div>
            <div className="product-features">Capacity: {capacity} GB</div>
            <Quantity
                productCount={this.state.productCount}
                onIncrementClick={this.onIncrementClick}
                onDecrementClick={this.onDecrementClick}
                minCount={1}
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

const mapStateToProps = (state,props) => ({
    isLiked:state.productsLike[props.id]
})

const mapDispatchLike = (dispatch,{id}) => ({
    addLike: () => dispatch({
        type: "LIKE",
        id
    }),
    removeLike: () => dispatch({
        type: "DISLIKE",
        id
    }),
    addProductToCart:(id,count) => dispatch({
        type: "ADD_PRODUCT_TO_CART",
        id,
        count,
    })
})

export default connect(
    mapStateToProps,
    mapDispatchLike,
) (ProductListItem)