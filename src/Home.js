import React from "react";
import './App.css';
import Login from "./Login";
import Register from "./Register";

class Home extends React.Component {

    constructor(props){
      super(props);
      this.state={
        name:"kevin",
      };
    }
  
    componentDidUpdate(){
      console.log("UPDATED")
    }
  
    
  
    onLogout=() =>{
      this.props.changePage("Login");}
  
    
  
   render(){
    return (
      <div className="home">
        <h1>Hello, my name is {this.state.name}</h1>
  
        <input
          value={this.state.name}
          onChange={event => this.setState({name: event.target.value})}
        />
          <button onClick={this.onLogout}>Logout
          </button>
      </div>
    );
   }
  }
  
  export default Home;
  