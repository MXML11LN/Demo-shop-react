import React from "react"
import Cart from "./Cart/Cart"
import Menu from "./Menu/Menu"
import Logo from "./Logo/Logo"
import "./header.css"


const Header = () =>{
    return(
    <header class="header">
		<div class="container">
			<div class="row">
				<Logo/>
				<Menu/>
				<Cart/>
			</div>
		</div>
	</header>
    )
}

export default Header