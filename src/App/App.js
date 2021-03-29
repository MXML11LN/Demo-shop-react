import React, { Component } from "react"
import "../common/reset.css"
import "../common/base.css"

import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Main from "./Main/Main"

class App extends Component{

    state={
        cartData:{
            count:0,
            price:0,
        }
    }

    addProductToCart(count,price) {
        this.setState((prevState) =>({
            cartData:{
            count:prevState.cartData.count + count,
            price:prevState.cartData.price + (price * count),
            }
        }))
    }

    render(){
        return(
            <>
                <Header
                    cartData={this.state.cartData}
                />
                <button
                onClick ={() => this.addProductToCart(5,1000)}>Add to Cart</button>
                <Main/>
                <Footer/>
            </>
        )
    }
}




export default App