import React, { Component } from 'react';
import CardList from './CardList';
import './App.css';

class App extends Component {
    constructor() {
      super()
      this.state = {
        people: [],
        searchfield: ''
      }
    }

componentDidMount() {
  fetch('https://swapi.co/api/people/1')
  .then(response => response.json())
  .then(users => {this.setState({people: users})});
}

  render() {
    return (
      <div className='tc'>
        <h1 className='f1'>StarWarsAPI</h1>
        <CardList/>
      </div>
    );
  }
}

export default App;
