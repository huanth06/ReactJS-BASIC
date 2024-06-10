import React, { Component } from 'react'

export default class ChangeBackgroundColor extends Component {
constructor(props){
    super(props);
    this.state = {
        backgroundColor: 'Black'
    }
}
componentDidMount(){
    setTimeout(() => {
        this.setState({
            backgroundColor: 'Pink'
        });
    }, 5000);
}
  render() {
    return (
        <div style={{
            width: 400,
            height: 80,
            marginTop:20,
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: this.state.backgroundColor
        }}></div>
    )
  }
}
