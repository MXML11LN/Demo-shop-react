import React, { Component } from "react"
import "../common/reset.css"
import "../common/base.css"

import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Main from "./Main/Main"

class App extends Component{

    state={
        productsInCart:{
            1:2,
            2:5,
        }
    }

    addProductToCart = (id,count) => {
        this.setState((prevState) =>({
            productsInCart:{
                [id]:prevState.productsInCart[id] + count
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
                <button
                onClick={() => this.addProductToCart(2,5 )}
                >addProductToCart</button>
                <Main
                    addProductToCart={this.addProductToCart}
                />
                <Footer/>
            </>
        )
    }
}




export default App