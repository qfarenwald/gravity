import React, { Component } from 'react';
import { fetchData } from './utils/apiCalls';
import { filteredTrailData } from './utils/helpers';
import { connect } from 'react-redux';
import { getTrails } from './actions';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Location } from './components/Location/Location';
import { Modal } from './components/Modal/Modal';
import ShuttleForm from './containers/ShuttleForm/ShuttleForm';
import TrailsContainer from './containers/TrailsContainer/TrailsContainer';
import './App.css';

export class App extends Component {

  getLatLon = async (lat, lon) => {
    const { getTrails } = this.props
    const trails = await fetchData(`https://www.mtbproject.com/data/get-trails?lat=${lat}&lon=-${lon}&maxDistance=10&key=200628346-0f130fc8870531d529e09b85e721317a`)
    const cleanTrails = filteredTrailData(trails.trails)
    getTrails(cleanTrails)
  }

  render() {
    return (
      <div className="App">
        <Route path='/' render={() => <Header />} />
        <Route exact path='/' render={() => <Location getLatLon={this.getLatLon}/>} />
        <Route exact path='/trails' render={() => <TrailsContainer />} />
        <Route exact path='/shuttle' render={() => <ShuttleForm />} />
        <Route exact path='/confirmation' render={() => <Modal />} />
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
