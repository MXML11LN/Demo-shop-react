import React from "react"
import ProductListItem from "./ProductListItem" 

const ProductList =() => {
    return(
        <>
        <h1 className = "page-title">Product List</h1>
        <div className = "row">
            <div className = "col-lg-6">
                <ProductListItem/>
            </div>
        </div>
        </>
    )
}

export default ProductList