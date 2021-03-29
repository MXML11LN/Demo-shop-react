import React from "react"
import ProductList from "./Products/ProductList"

const Main = (
	{addProductToCart}
) =>{
    return(
        <main className="main">
			<div className="container">
				<div className="row">
					<div className="col-lg-3">
						Filter
					</div>
					<div className="col-lg-9">
						<ProductList
						addProductToCart={addProductToCart}
						/>
					</div>
				</div>
			</div>
		</main>
    )
}

export default Main