import './App.css'
import React, { Component } from 'react'
import ChangeBackgroundColor from './compents/ChangeBackgroundColor'
import IncreaseDecrease from './compents/IncreaseDecrease'
import Hello from './compents/Hello';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      display: true
    }
  }

  render() {
    let comp;
    if(this.state.display){
      comp = <Hello />
    }
    return (
      <div style={{textAlign:"center"}}>
        <ChangeBackgroundColor/>
        <IncreaseDecrease />
        {comp}
        <button onClick={()=>{
          this.setState({
            display: false
          });
        }}>Delete the component</button>
      </div>
    )
  }
}

