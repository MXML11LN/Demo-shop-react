import React from "react"
import { Route } from "react-router"
import CartPage from "./CartPage/CartPage"
import ShippingPage from "./ShippingPage/ShippingPage"
import PaymentPage from "./PaymentPage/PaymentPage"
import ProductList from "./Products/ProductList"
import { Testimonials } from "../../Components/Testimonials/Testimonials"

const Main = () =>{
    return(
        <main className="main">
			<div className="container">
				<div className="row">
					<div className="col-lg-3">
						Filter
					</div>
					<div className="col-lg-9">
						<Route path="/" exact component={ProductList}/>
						<Route path="/cart" component={CartPage}/>
						<Route path="/shipping" exact component={ShippingPage}/>
						<Route path="/payment" exact component={PaymentPage}/>
						<Route path="/"  exact component={Testimonials}/>
					</div>
				</div>
			</div>
		</main>
    )
}

export default Main