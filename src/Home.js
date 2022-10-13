import './App.css';
import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import NavbarComponent from './NavbarComponent';
import axios from 'axios';

export default class Home extends React.Component {
constructor(props){
  super(props);

  this.state = {
    findproduct: [],
    product:[],
    products: [],
    item:""
  }
}

/* filterBarang(){
const [filter,setFilter] = useState('');
}
 */
componentDidMount(){
  axios.get("https://online.akomate.com/atma/api/products").then(res =>{
      this.setState({
        products: res.data,
      })
  }) 
}

/* 
findItem (){
  this.setState({findproduct: products.filter((x) => {
  return x.name === this.state.findproduct})
})}
*/


render() {
  return (
    <div className="Home">
      <NavbarComponent />
      <br></br>
      <div className="Content">
        <input id="product" placeholder="Search" value={this.state.item} 
          onChange={element => this.setState({
          item:element.target.value})}/>
        <h1>Our Products</h1>
          
          <ul>
            {
            this.state.products.filter((findproduct =>
            findproduct.name.toLowerCase().includes(this.state.item.toLowerCase())
              )).map((product) => {
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

