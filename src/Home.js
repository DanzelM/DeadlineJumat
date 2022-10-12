import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import NavbarComponent from './NavbarComponent';
import axios from 'axios';

export default class Home extends React.Component {
constructor(props){
  super(props);

  this.state = {
    product: "",
    products: [],
  }
}

componentDidMount(){
  axios.get("https://online.akomate.com/atma/api/products").then(res =>{
      this.setState({
        products: res.data
      })
  }) 
}


render() {
  return (
    <div className="Home">
      <br></br>
      <div className="Content">
        <input id="product" value={this.state.product} 
          onChange={element => this.setState({
          product:element.target.value, products:[]})}/>
        <button type="button" onClick={() => {
          axios.get("https://online.akomate.com/atma/api/products").then(res =>{
          this.setState({
            })
          })
        }}>Search</button><br></br>
        <h1>Our Products</h1>
        <ul>{this.state.products.map((product) => {
            return <ul>
              <img src={product.image}></img>
              <h2>{product.name}</h2>
              <p>{product.detail}</p>
              <p>Price : IDR {product.price}</p>
            </ul>
        })
        
        }
        </ul>
      
      
      </div>
    </div>

    
  );
 }
}

