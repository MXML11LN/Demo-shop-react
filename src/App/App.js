import React, { Component } from "react"
import { omit } from "lodash"
import "../common/reset.css"
import "../common/base.css"

import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Main from "./Main/Main"

class App extends Component{

    state={
        productsInCart:{
            1:1,
            2:2,
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

    removeProductFromCart = (productId) => {
        this.setState((prevState) => ({
            productsInCart:omit(prevState.productsInCart,productId)
        }))
    }

    changeProductCount = (productId,count) => {
        this.setState((prevState)=> ({
            productsInCart:{
                ...prevState.productsInCart,
                [productId]:[count]
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
                    productsInCart={this.state.productsInCart}
                    addProductToCart={this.addProductToCart}
                    removeProductFromCart={this.removeProductFromCart}
                    changeProductCount={this.changeProductCount}
                />
                <Footer/>
            </>
        )
    }
}




export default App