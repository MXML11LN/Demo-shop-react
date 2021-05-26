import React from 'react'
import {connect} from "react-redux"
import Quantity from '../Quantity/Quantity'
import './CartProductListItemExtended.css'


const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductCount,
    isLiked,
}) => (
        <div className="cart-product-list-item-description">
            <div className="row">
                <div className="col-lg-3">
                    <img src={product.image} alt={product.name}/>
                </div>
                <div className="col-lg-9">
                    <p className="cart-extended-name">
                        <span> {product.name} </span> 
                    </p>
                    <p className="cart-extended-price">
                        Price for one item: <span className="bold">$ {product.price} </span> 
                    </p>
                    <button>
                        {isLiked ? <span>&#9829;</span> : <span>&#9825;</span>}
                    </button>
                    <p className="cart-extended-count">
                        Selected quantity: <span className="bold"> {productCount} </span> 
                    </p>
                    <Quantity
                        productCount={productCount}
                        onIncrementClick={() => changeProductCount(product.id,productCount+1)}
                        onDecrementClick={() => (productCount === 1) ? removeProductFromCart(product.id) :  changeProductCount(product.id,productCount-1)}
                        minCount={0}
                    />
                    <p className="cart-extended-sum">
                         Sum for this item: <span className="bold sum-price">$ {(product.price * productCount)} </span> 
                    </p>
                    <button onClick={() => removeProductFromCart(product.id)}>Remove product</button>
                </div>
            </div>
        </div>
)

const mapState = (state,props) => ({
    isLiked:state.productsLike[props.product.id]
})

const mapDispatch = (dispatch) => ({
    removeProductFromCart:(id) => dispatch({
        type:"REMOVE_PRODUCT_FROM_CART",
        id,
    }),
    changeProductCount:(id,count) => dispatch({
        type:"CHANGE_PRODUCT_QUANTITY",
        id,
        count,
    })
})

export default  connect(
    mapState,
    mapDispatch,
)(CartProductListItemExtended)

