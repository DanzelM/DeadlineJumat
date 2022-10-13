import React from "react";
import './App.css';
import Home from "./Home";
import Register from "./Register";
import App from "./App";
import NavbarComponent from "./NavbarComponent";

class Login extends React.Component {

    constructor(props){
      super(props);
      this.state={
         username:"",
        password:"",
          errormessage:""
      };
    }
  /*
   onLogin=() =>{
      if(this.state.username === "aa" && this.state.password === "aa"){
          this.props.changePage("Home");
      }
      else{
          this.setState({errormessage:"Wrong Username or Password"});
      }
   }
*/
   onRegister=() =>{
    this.props.changePage("Register");
   }

   onLogin = () => {
    if(this.props.users.find(user => (user.username === this.state.username && user.password === this.state.password)))
    {this.props.changePage("Home");
    }
    else{
        alert("Wrong username or password");
    }
}

  render () {
        return (
            <div>
                <div>
                    <label> User Name </label>
                    <input
                        value={this.state.username}
                        onChange={event => this.setState({username: event.target.value})} 
                    />
                </div>
                <div>
                    <label> Password </label>
                    <input 
                        type="password"
                        value={this.state.password}
                        onChange={event => this.setState({password: event.target.value})}
                    />
                </div>
                {
                    this.state.errormessage !== ""?
                    <lable>{this.state.errormessage}</lable>: null
                }
                <button onClick={this.onLogin}>Submit</button>
                <button onClick={this.onRegister}>Register</button>
            </div>
        );
  }
  }


  export default Login;