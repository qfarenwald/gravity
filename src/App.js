import React, { Component } from 'react';
import { fetchData } from './utils/apiCalls';
import { filteredTrailData1, filteredTrailData2 } from './utils/helpers';
import './App.css';

class App extends Component {

// if doing multiple locations, take out of componentDidMount and on a button click to move from home page to trails page
// if ^ interpolate fetch with diff coordinates?
// split up data into two fetches and clean data twice?
// move App to either components or container 

  async componentDidMount() {
    try {
      const trails = await fetchData('https://www.mtbproject.com/data/get-trails?lat=39.7392&lon=-104.9903&maxDistance=10&key=200628346-0f130fc8870531d529e09b85e721317a')
      const cleanTrails1 = filteredTrailData1(trails.trails)
      const cleanTrails2 = filteredTrailData2(trails.trails)
    } catch {
      console.log('error')
    }
  }

  render() {
    return (
      <div className="App">
        GRAVITY
      </div>
    )
  }

}

export default App;
