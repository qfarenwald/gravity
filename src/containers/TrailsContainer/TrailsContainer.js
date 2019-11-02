import React from 'react';
import { Trail } from '../Trail/Trail';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
      <h3>PICK YOUR TRAIL</h3>
      {trailsToDisplay}
      <Link to='/' className="link"><h5>BACK TO LOCATIONS</h5></Link>
    </div>
  )
}

export const mapStateToProps = state => ({
  trails: state.trails
});

export default connect(mapStateToProps)(TrailsContainer)
