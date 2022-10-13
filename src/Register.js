import React from "react";
import './App.css';
import Home from "./Home";
import Login from "./Login";
import NavbarComponent from "./NavbarComponent";
import logo from "./logo1.png"

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
                <div className="Auth-form-container">
                <img src={logo} alt="logo"></img>
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Register</h3>
                            <div className="form-group mt-3">
                                <label>Email address</label>
                                <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                                value={this.state.newUser}
                                onChange={event => this.setState({newUser: event.target.value})} 
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Password</label>
                                <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
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
                        <div className="d-grid gap-2 mt-3">
                            <button onClick={this.onRegister} type="submitreg" className="btn btn-secondary">
                            Submit and Register
                            </button>
                        </div>
                    </div>
                </form>
                </div>
          </div>
      );
  }
  }


  export default Register;