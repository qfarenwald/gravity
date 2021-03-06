import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, Link } from 'react-router-dom';
import { makeBooking } from '../../actions';
import './ShuttleForm.css';
import PropTypes from 'prop-types';

export class ShuttleForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      riders: '',
      bikes: '',
      date: '',
      starttime: '',
      endtime: '',
      formReady: false,
      redirect: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if (this.state.name !== '' && this.state.email !== '' && this.state.riders !== '' && this.state.bikes !== '' && this.state.date !== '' && this.state.starttime !== '' && this.state.endtime !== '') {
      this.setState({
        formReady: true,
      });
    }
  }

  handleSubmit = (e) => {
    const { makeBooking } = this.props;
    e.preventDefault();
    makeBooking(this.state);
    this.setRedirect();
  }

  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/confirmation" />;
    }
  }

  render() {
    return (
      <form className="ShuttleForm">
        <h2>{this.props.match.location.pathname.split('/')[2].toUpperCase()}</h2>
        <h3>BOOK YOUR SHUTTLE</h3>
        <input
          className="ShuttleForm-input"
          name="name"
          type="text"
          placeholder="Enter Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          className="ShuttleForm-input"
          name="email"
          type="text"
          placeholder="Enter Email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <input
          className="ShuttleForm-input"
          name="riders"
          type="number"
          placeholder="Enter Number Of Riders"
          value={this.state.riders}
          onChange={this.handleChange}
        />
        <input
          className="ShuttleForm-input"
          name="bikes"
          type="number"
          placeholder="Enter Number Of Bikes"
          value={this.state.bikes}
          onChange={this.handleChange}
        />
        <input
          className="ShuttleForm-input"
          name="date"
          type="text"
          placeholder="Enter Date (mm/dd)"
          value={this.state.date}
          onChange={this.handleChange}
        />
        <input
          className="ShuttleForm-input"
          name="starttime"
          type="text"
          placeholder="Enter Start Time (00:00 am/pm)"
          value={this.state.starttime}
          onChange={this.handleChange}
        />
        <input
          className="ShuttleForm-input"
          name="endtime"
          type="text"
          placeholder="Enter End Time (00:00 am/pm)"
          value={this.state.endtime}
          onChange={this.handleChange}
        />
        <p className={this.state.formReady ? 'error-p-hidden' : 'error-p'}>PLEASE FILL OUT ALL INPUTS</p>

        {this.renderRedirect()}
        <button disabled={!this.state.formReady} type="button" className="ShuttleForm-btn" onClick={this.handleSubmit}>SUBMIT BOOKING</button>

        <Link to="/" className="link"><h5>BACK TO LOCATIONS</h5></Link>
      </form>
    );
  }
}

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators(
    {
      makeBooking,
    },
    dispatch,
  )
);

export default connect(null, mapDispatchToProps)(ShuttleForm);

ShuttleForm.propTypes = {
  makeBooking: PropTypes.func.isRequired,
}
