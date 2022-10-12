import React from "react";
import './App.css';
import Home from "./Home";
import Login from "./Login";

class Register extends React.Component {

    constructor(props){
      super(props);
      this.state={
          newPassword: "",
          newUser:"",
          errormessage:""
      };
    }
  
   onRegister=() =>{
    if(this.state.newUser !== "" && this.state.newPassword !== ""){
        this.props.addUser({
            username:this.state.newUser,password:this.state.newPassword
        });
        this.props.changePage("Login");
    }
    else{
        alert("Type something");
    }
    
   }
  
  render(){
      return (
          <div>
              <div>
                  <label>Type your ID </label>
                  <input
                      value={this.state.newUser}
                      onChange={event => this.setState({newUser: event.target.value})} 
                  />
              </div>
              <div>
                  <label>Type Your Password </label>
                  <input 
                      type="newPassword"
                      value={this.state.newPassword}
                      onChange={event => this.setState({newPassword: event.target.value})}
                  />
              </div>
              {
                  this.state.errormessage !== ""?
                  <lable>{this.state.errormessage}</lable>: null
              }
              {
                this.state.errormessage !== ""?
                <lable>{this.state.errormessage}</lable>: null
              }
              <button onClick={this.onRegister}>Submit</button>
          </div>
      );
  }
  }
  
  
  export default Register;
  