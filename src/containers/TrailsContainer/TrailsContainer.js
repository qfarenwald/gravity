import React from 'react';
import { Trail } from '../Trail/Trail';
import { connect } from 'react-redux';
import './TrailsContainer.css';

const TrailsContainer = ({ trails }) => {

  const trailsToDisplay = trails.map((trail) => {
    return <Trail
      key={trail.id}
      id={trail.id}
      name={trail.name}
      stars={trail.stars}
    />
  })

  return (
    <div>
      {trailsToDisplay}
    </div>
  )
}

export const mapStateToProps = state => ({
  trails: state.trails
});

export default connect(mapStateToProps)(TrailsContainer)
