import React, {Component} from "react"
import axios from "axios"
import "./checkout.css"

class CheckoutPage extends Component{

    state = {
        name:"",
        adress:"",
        isOrderSand:false,
    }

    orderName = (e) => {
        this.setState({
            name:e.target.value,
        })
    }

    orderAdress = (e) => {
        this.setState({
            adress:e.target.value,
        })
    }

    sendForm = (e) =>{
        e.preventDefault();
        axios.post("https://my-json-server.typicode.com/kznkv-skillup/server/posts",
        {
            name:this.state.name,
            adress:this.state.adress,
        })
        .then(res => res.data)
        .then(({name,adress}) => this.setState({name:name,adress,isOrderSand:true}))
    }
    renderForm = () =>{
        return(
            <div className="form">
                <p>Please enter your name and adress<br/> to deliver your Products</p>
                <form onSubmit={this.sendForm}>
                    <div>
                        <input  className="input"
                            type="text"
                            placeholder="enter your name"
                            value={this.state.name}
                            onChange={this.orderName}
                        />
                    </div>
                    <div>
                        <input className="input"
                            type="text"
                            placeholder="enter your adress"
                            value={this.state.adress}
                            onChange={this.orderAdress}
                        />
                    </div>
                    <button className="button" type="submit">send</button>
                </form>
            </div>
        )
    }


    renderMassage = () =>{
        return(
            <div className="form">
                <p>Dear {this.state.name}, thanks for your order!</p>
                <p>We'll send your product to : {this.state.adress}</p>
            </div>
        )
    }

    render(){
        return(
            <>
            <h1 className="page-title">Checkout</h1>
            {this.state.isOrderSand !== true ? this.renderForm() : this.renderMassage()}
            </>
        )
    }
}

export default CheckoutPage