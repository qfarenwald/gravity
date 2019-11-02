import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeBooking } from '../../actions';
import { Redirect, Link } from 'react-router-dom';
import './ShuttleForm.css';

export class ShuttleForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      formReady: false,
      redirect: false
    }
  }

  clearInputs = () => {
    this.setState({
      name: '',
      email: '',
      formReady: false,
      redirect: false
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

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/confirmation' />
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

        {this.renderRedirect()}
        <button disabled={this.state.formReady ? false : true} type="button" className="ShuttleForm-btn" onClick={this.setRedirect}>SUBMIT BOOKING</button>

        <Link to='/confirmation' className="link"><h5>BACK TO TRAILS</h5></Link>
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
