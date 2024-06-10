import React, { Component } from 'react'

export default class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            number1: '',
            number2: '',
            temp1: '',
            temp2: '',
            result: ''
        }
    }
    changeInp =  e => {
        this.setState({
            [e.target.name]: [e.target.value]
        });
    }
    total = () =>{
        this.setState({
            result: parseInt(this.state.temp1) + parseInt(this.state.temp2),
        });
    }
    subtra = () =>{
        this.setState({
            result: this.state.temp1 - this.state.temp2,
        });
    }
    multip = () =>{
        this.setState({
            result: this.state.temp1 * this.state.temp2,
        });
    }
    divi = () =>{
        this.setState({
            result: this.state.temp1 / this.state.temp2,
        });
    }
    reset = () => {
        this.setState({
            temp1: '',
            temp2: '',
            result: ''
        })
    }
  render() {
    return (
      <div>
        <div className="calc" style={{border: 'solid', padding: 20, maxWidth: 300}}>
            <div className='row'>
                <label for="temp1">Number 1: </label> <input type="number" name="temp1" value={this.state.temp1} onChange={e=>{this.changeInp(e)}} />
            </div>
            <div className='row'>
                <label for="temp2">Number 2: </label> <input type="number" name="temp2" value={this.state.temp2} onChange={e=>{this.changeInp(e)}} />
            </div>
            <div className='row'>
            <label for="result">Result: </label> <input type="v" name="result" value={this.state.result} disabled/>
            </div>
            <button onClick={this.total}>+</button>
            <button onClick={this.subtra}>-</button>
            <button onClick={this.multip}>x</button>
            <button onClick={this.divi}>/</button>
            <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }
}
