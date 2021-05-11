import React, {Component} from "react"
import axios from "axios"

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
            <form onSubmit={this.sendForm}>
                <div>
                    <input 
                        type="text"
                        placeholder="enter your name"
                        value={this.state.name}
                        onChange={this.orderName}
                    />
                </div>
                <div>
                    <input 
                        type="text"
                        placeholder="enter your adress"
                        value={this.state.adress}
                        onChange={this.orderAdress}
                    />
                </div>
                <button type="submit">sent</button>
            </form>
        )
    }


    renderMassage = () =>{
        return(
            <div>
                Dear {this.state.name}, thanks for your order!
                <p>Adress: {this.state.adress}</p>
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