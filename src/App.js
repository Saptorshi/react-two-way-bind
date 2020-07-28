import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    name : 'Dana'
  }

  changeName = (newName) => {
    this.setState({
      name : newName
    })
  }

  changeNameAsync = (event) => {
    this.setState({
      name : event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={ () => this.changeName('Awesome Dana :(') }>Annoymous Change</button>
        <button onClick={ this.changeName.bind(this, 'Awesome Dana :)') }>Bind Change</button>
        <div>{ this.state.name }</div>
        <input type="text" onChange={this.changeNameAsync} value={this.state.value} />
      </div>
    );
  }
}

export default App;
