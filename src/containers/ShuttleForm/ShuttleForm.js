import React, { Component } from 'react';
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

  // submitBooking = () => {
  //  should be an action that puts this info into the store
  // }

  render() {
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
        <button className="ShuttleForm-btn">SUBMIT BOOKING</button>
      </form>
    )
  }
}
