import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router-dom';
import { fetchData } from './utils/apiCalls';
import { filteredTrailData } from './utils/helpers';
import { getTrails } from './actions';
import { Header } from './components/Header/Header';
import { Location } from './components/Location/Location';
import { Modal } from './components/Modal/Modal';
import ShuttleForm from './containers/ShuttleForm/ShuttleForm';
import TrailsContainer from './containers/TrailsContainer/TrailsContainer';
import './App.css';
import PropTypes from 'prop-types';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      error: ''
    }
  }

  getLatLon = async (lat, lon) => {
    const { getTrails } = this.props
    try {
      const trails = await fetchData(`https://www.mtbproject.com/data/get-trails?lat=${lat}&lon=-${lon}&maxDistance=10&key=200628346-0f130fc8870531d529e09b85e721317a`);
      const cleanTrails = filteredTrailData(trails.trails);
      getTrails(cleanTrails);
    } catch {
      this.setState({ error: 'THE TRAIL DATA MUST BE OUT RIDING, PLEASE TRY AGAIN LATER.'})
    }
  }

  render() {
    return (
      <div className="App">
        <Route path="/" render={() => <Header />} />
        <Route exact path="/" render={() => <Location getLatLon={this.getLatLon} />} />
        <Route exact path="/trails/:location" render={(match) => <TrailsContainer match={match} error={this.state.error} />} />
        <Route exact path="/shuttle/:trail" render={(match) => <ShuttleForm match={match}/>} />
        <Route exact path="/confirmation" render={() => <Modal />} />
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators(
    {
      getTrails,
    },
    dispatch,
  )
);

export default connect(null, mapDispatchToProps)(App);

App.propTypes = {
  getTrails: PropTypes.func.isRequired,
}
