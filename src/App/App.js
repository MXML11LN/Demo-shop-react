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

    render(){
        return(
            <>
                <Header
                    cartData={this.state.cartData}
                />
                <Main/>
                <Footer/>
            </>
        )
    }
}




export default App