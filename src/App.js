import React, { Component } from 'react';
import { fetchData } from './utils/apiCalls';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  async componentDidMount() {
    try {
      const trails = await fetchData('https://www.mtbproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200628346-0f130fc8870531d529e09b85e721317a')
      console.log('trails', trails)
    } catch {
      console.log('error')
    }
  }


  render() {
    return (
      <div className="App">
        GRAVITY
      </div>
    );
  }

}

export default App;
