import React from "react"

const ProductListItem = () =>{
    return(
        <div className="product- list-item">
            <div className="product-title">iPhonex</div>
            <div className="product-description">This is iPhone X</div>
            <div className="product-features">Type: phone</div>
            <div className="product-features">capacity: 64gb</div>
            <div className="product-price">$ 800X</div>
            <button className=""btn-add-to-cart>Add to cart</button>
        </div>
        )
}
export default ProductListItem