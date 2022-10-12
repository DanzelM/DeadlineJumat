import './App.css';
import React from "react";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

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
  

 render(){
  return (
    <div className="App">
      {
        this.state.page === "Login" ?
        <Login changePage={this.changePage} users={this.state.users}/>:
        this.state.page === "Register"?
        <Register changePage={this.changePage} addUser={this.addUser} />:
        <Home changePage={this.changePage}/>
      }
    </div>

    
  );
 }
}

export default App;
