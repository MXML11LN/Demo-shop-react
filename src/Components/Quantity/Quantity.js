import React from "react"

const Quantity = ({
    productCount,
    onIncrementClick,
    onDecrementClick,
    minCount,
}) => {
    return(
        <>
            <div className="product-quantity"> 
                <button
                    disabled ={productCount<=minCount}
                    onClick={() => onDecrementClick()}>-</button>
                <input type="text" value={productCount} readOnly/>
                <button
                    disabled={productCount >=10}
                    onClick={() => onIncrementClick()}>+</button>
            </div>
        </>
    )
}

export default Quantity