import React from "react"
import "../common/reset.css"
import "../common/base.css"

import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Main from "./Main/Main"

const App = () => {
    return(
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}



export default App