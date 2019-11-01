import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeBooking } from '../../actions';
import './ShuttleForm.css';

export class ShuttleForm extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      email: ''
    }
  }

  clearInputs = () => {
    this.setState({
      name: '',
      email: ''
    })
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleClick = (e) => {
    e.preventDefault()
    console.log('state', this.state)
    makeBooking(this.state)
  }

  render() {
    const { makeBooking } = this.props

    return (
      <form className="ShuttleForm">
        <input className="ShuttleForm-input"
          name="name"
          type="text"
          placeholder="Enter Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input className="ShuttleForm-input"
          name="email"
          type="text"
          placeholder="Enter Email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <button className="ShuttleForm-btn" onClick={this.handleClick}>SUBMIT BOOKING</button>
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => (
  bindActionCreators(
    {
      makeBooking
    },
    dispatch)
)

export default connect(null, mapDispatchToProps)(ShuttleForm)
