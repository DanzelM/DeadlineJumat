import React from "react";
import Home from "./Home";
import Login from "./Login";
import './App.css'; 
import NavbarComponent from './NavbarComponent';

class Cart extends React.Component {

    constructor(props){
      super(props);
      this.state={
       items:[
        {name:"cokicoki" ,price : 1000, quantity:2}
       ]
      };
    }

    increaseItem(){
        this.setState({quantity:this.state.quantity+1})
    }

    decreaseItem(){
        this.setState({quantity:this.state.quantity1})
    }

   render(){
    return (
     <div classname="Cart">
        <div classname="content">
            <h1 id="yourcart">Your Cart</h1>
            <ul>{this.state.items.map((item) => {
                return <ul>
                <img src={item.image}></img>
                <h2>{item.name}</h2>
                <p>Price : IDR {item.price}</p>
                <p>quantity : {item.quantity} pcs</p>
                </ul>
             })}
            </ul>
        </div>
     </div>


    );
   }
  }

  export default Cart;