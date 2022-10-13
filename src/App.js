import './App.css';
import React from "react";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import NavbarComponent from './NavbarComponent';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
     page: "Login",
     users: [
      {username:"kevin", password:"kevin"},
      {    }
      ],
    };
  }

  addUser = user => {
    this.setState({users: this.state.users.concat(user)})
  }

  changePage = newPage => {
    this.setState({page: newPage});
  }

  onLogout = () => {
    this.props.changePage("Login");
  }

 render(){
  return (
    <div className="App">
      <NavbarComponent/> 
      <br></br>
      <div className="Content">
      {
        this.state.page === "Login" ?
        <Login changePage={this.changePage} users={this.state.users}/>:
        this.state.page === "Register"?
        <Register changePage={this.changePage} addUser={this.addUser} />:
        <Home changePage={this.changePage}/>
      }
      </div>
    </div>


  );
 }
}

export default App;