import React from "react";
import './App.css';
import Home from "./Home";
import Register from "./Register";
import App from "./App";
import NavbarComponent from "./NavbarComponent";
import logo from "./logo1.png"

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
                <div className="Auth-form-container">
                <img src={logo} alt="logo"></img>
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                            <div className="form-group mt-3">
                                <label>Email address</label>
                                <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                                value={this.state.username}
                                onChange={event => this.setState({username: event.target.value})} 
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Password</label>
                                <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                value={this.state.password}
                                onChange={event => this.setState({password: event.target.value})}
                                />
                            </div>
                        {
                        this.state.errormessage !== ""?
                        <lable>{this.state.errormessage}</lable>: null
                        }
                        <div className="d-grid gap-2 mt-3">
                            <button onClick={this.onLogin} type="submit" className="btn btn-secondary">
                            Submit
                            </button>
                            <button onClick={this.onRegister} type="register" className="btn btn-secondary">
                            Register
                            </button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        );
  }
  }


  export default Login;