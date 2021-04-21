import React from "react"

const CartProductListItem = ({
    product,
    productCount
}) => {
    return(
        <div style={{
            marginBottom:"15px",
            backgroundColor:"rgba(255,255,255,0.7)",
            padding:"10px",
            borderRadius:"0.95em",
            }} >{product.name} : {productCount}</div>
    )
}

export default CartProductListItem