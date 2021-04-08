import React, { Component } from "react"
import "../common/reset.css"
import "../common/base.css"

import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Main from "./Main/Main"

class App extends Component{

    state={
        productsInCart:{
        }
    }

    addProductToCart = (id,count) => {
        this.setState((prevState) =>({
            productsInCart:{
                ...prevState.productsInCart,
                [id]:(prevState.productsInCart[id] || 0)+count
            }
        }))
    }
    render(){
        return(
            <>
                <Header
                    cartData={this.state.cartData}
                    productsInCart={this.state.productsInCart}
                />
                <Main
                    addProductToCart={this.addProductToCart}
                />
                <Footer/>
            </>
        )
    }
}




export default App