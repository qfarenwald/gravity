import React, { Component } from 'react';
import { fetchData } from './utils/apiCalls';
import { filteredTrailData } from './utils/helpers';
import { connect } from 'react-redux';
import { getTrails } from './actions';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Location } from './components/Location/Location';
import ShuttleForm from './containers/ShuttleForm/ShuttleForm';
import TrailsContainer from './containers/TrailsContainer/TrailsContainer';
import './App.css';

export class App extends Component {

// if doing multiple locations, take out of componentDidMount and on a button click to move from home page to trails page
// if ^ interpolate fetch with diff coordinates?
// move App to either components or container

  async componentDidMount() {
    console.log('app props', this.props)
    const { getTrails } = this.props
    console.log('getTrails', getTrails)

    try {
      const trails = await fetchData('https://www.mtbproject.com/data/get-trails?lat=39.7392&lon=-104.9903&maxDistance=10&key=200628346-0f130fc8870531d529e09b85e721317a')
      const cleanTrails = filteredTrailData(trails.trails)
      getTrails(cleanTrails)
    } catch {
      console.log('error')
    }
  }

  render() {
    return (
      <div className="App">
        <Route path='/' render={() => <Header />} />
        <Route exact path='/' render={() => <Location />} />
        <Route exact path='/trails' render={() => <TrailsContainer />} />
        <Route exact path='/shuttle' render={() => <ShuttleForm />} />
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => (
  bindActionCreators(
    {
      getTrails
    },
  dispatch)
)

export default connect(null, mapDispatchToProps)(App);
