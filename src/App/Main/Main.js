import React from "react"
import { Route } from "react-router"
import CartPage from "./CartPage/CartPage"
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
						{/*<ProductList
							addProductToCart={addProductToCart}
						/>*/}
						<Route path="/" exact component={ProductList}/>
						<Route path="/cart" exact component={CartPage}/>
					</div>
				</div>
			</div>
		</main>
    )
}

export default Main