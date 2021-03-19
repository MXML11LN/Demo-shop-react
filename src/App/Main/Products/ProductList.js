import React from "react"
import ProductListItem from "./ProductListItem" 

const ProductList =() => {
    return(
        <>
        <h1 className = "page-title">Product List</h1>
        <div className = "row">
            <div className = "col-lg-6">
                <ProductListItem
                    name = "iPhone 8"
                    description="This is iPhone 8"
                    type = "phone"
                    capacity="128 Gb"
                    price="500"
                />
                
            </div>
            <div className = "col-lg-6">
                <ProductListItem
                    name = "iPhone 12"
                    description="This is iPhone 12"
                    type = "phone"
                    capacity="256 Gb"
                    price="1500"
                />
                
            </div>
            <div className = "col-lg-6">
                <ProductListItem
                    name = "iPhone X"
                    description="This is iPhone x"
                    type = "phone"
                    capacity="512 Gb"
                    price="1000"
                />
                
            </div>
            <div className = "col-lg-6">
                <ProductListItem
                    name = "iPhone XS"
                    description="This is iPhone XS"
                    type = "phone"
                    capacity="128 Gb"
                    price="1300"
                />
                
            </div>
        </div>
        </>
    )
}

export default ProductList