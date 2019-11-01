import React from 'react';
import { Trail } from '../Trail/Trail';
import { connect } from 'react-redux';
import './TrailsContainer.css';

const TrailsContainer = ({ trails }) => {
  console.log('trailsFromState', trails)
  // const trailsToDisplay = trails.map((trail) => {
  //
  // })
  return (
    <div>
      <Trail />
    </div>
  )
}

export const mapStateToProps = state => ({
  trails: state.trails
});

export default connect(mapStateToProps)(TrailsContainer)
