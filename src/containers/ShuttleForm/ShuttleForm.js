import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeBooking } from '../../actions';
import { Link } from 'react-router-dom';
import './ShuttleForm.css';

export class ShuttleForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      formReady: false
    }
  }

  clearInputs = () => {
    this.setState({
      name: '',
      email: '',
      formReady: false
    })
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    if(this.state.name !== '' && this.state.email !== '') {
      this.setState({
        formReady: true
      })
    }
  }

  handleClick = (e) => {
    e.preventDefault()
    const { makeBooking } = this.props
    if (this.state.name !== '' && this.state.email !== '') {
      makeBooking(this.state)
      this.clearInputs()
    } else {

    }
  }

  render() {
    return (
      <form className="ShuttleForm">
        <h3>BOOK YOUR SHUTTLE</h3>
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
        <p className="ShuttleForm-p">{this.state.formReady ? null : "PLEASE FILL OUT ALL INPUTS"}</p>
        <Link to='/confirmation'><button disabled={this.state.formReady ? false : true} type="button" className="ShuttleForm-btn" onClick={this.handleClick}>SUBMIT BOOKING</button></Link>
        <Link to='/trails' className="link"><h5>BACK TO TRAILS</h5></Link>
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
