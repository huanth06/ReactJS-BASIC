import logo from './logo.svg';
import './App.css';
import {Component} from 'react'

class App extends  Component{
  constructor(props){
    super(props);
    this.state = {
      list: [],
      item: ''
    }
  }
  handleChange = e =>{
    this.setState({
      item: e.target.value
    });
  }
  handleAddItem = () => {
    if(this.state.item){
      this.state.list.push(this.state.item);
      this.setState({
        list:this.state.list,
        item:''
      })
    }
    
  }
  render(){
    return (
      <>
        <h1>Todo List</h1>
        <input type="text" name="item" value={this.state.item} onChange={e=>this.handleChange(e)} />
        <button type="" onClick={this.handleAddItem}>Add</button>
        <ul>
          {this.state.list.map(res=>(
            <li>{res}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
