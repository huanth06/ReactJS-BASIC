import React, { Component } from 'react'
import Home from './components/Home';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoggedIn : false
    };
  }
  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  }
  handleLogout = () => {
    this.setState({
      isLoggedIn: false
    });
  }
  render() {
    if(this.state.isLoggedIn!==false){
      return(
        <Home onLogOut={this.handleLogout} />
      )
    }
    return (
      <div style={{textAlign: 'center'}}>
        <div>
            <h1>Please Log in</h1>
            <button onClick={this.handleLogin}>Log in</button>
        </div>
      </div>
    )
  }
}
