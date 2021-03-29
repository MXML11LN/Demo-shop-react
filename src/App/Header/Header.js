import React from "react"

import Cart from "./Cart/Cart"
import Menu from "./Menu/Menu"
import Logo from "./Logo/Logo"

import "./header.css"


const Header = ({
	cartData
}) =>{
    return(
    <header className="header">
		<div className="container">
			<div className="row">
				<div className="col-lg-3">
					<Logo/>
				</div>
				<div className="col-lg-6">
					<Menu/>
				</div>
				<div className="col-lg-3">	
					<Cart
						price={cartData.price}
						count={cartData.count}
					/>
				</div>
			</div>
		</div>
	</header>
    )
}

export default Header