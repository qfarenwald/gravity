import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Trail } from '../Trail/Trail';
import './TrailsContainer.css';

export const TrailsContainer = ({ trails }) => {
  const trailsToDisplay = trails.map((trail) => (
    <Trail
      key={trail.id}
      id={trail.id}
      name={trail.name}
      stars={trail.stars}
      difficulty={trail.difficulty}
      descent={trail.descent}
      conditionDate={trail.conditionDate}
      conditionStatus={trail.conditionStatus}
    />
  ));

  return (
    <div className="TrailsContainer">
      <h3>PICK YOUR TRAIL</h3>
      {trailsToDisplay}
      <Link to="/" className="link"><h5>BACK TO LOCATIONS</h5></Link>
    </div>
  );
};

export const mapStateToProps = (state) => ({
  trails: state.trails,
});

export default connect(mapStateToProps)(TrailsContainer);
