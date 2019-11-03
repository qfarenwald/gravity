import React from 'react';
import ReactDOM from 'react-dom';
import { ShuttleForm } from './ShuttleForm';
import { shallow } from 'enzyme';

describe('ShuttleForm', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<ShuttleForm />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should set state of name when handleChange is called with an input event', () => {
    const wrapper = shallow(<ShuttleForm />)
    const inputEvent = {
      target: {
        name: "name",
        value: "Quinne"
      }
    }

    wrapper.instance().handleChange(inputEvent);

    expect(wrapper.state('name')).toEqual(inputEvent.target.value);
  })

  it('should set state of email when handleChange is called with an input event', () => {
    const wrapper = shallow(<ShuttleForm />)
    const inputEvent = {
      target: {
        name: "email",
        value: "q.farenwald@gmail.com"
      }
    }

    wrapper.instance().handleChange(inputEvent);

    expect(wrapper.state('email')).toEqual(inputEvent.target.value);
  })

  it('should set state of riders when handleChange is called with an input event', () => {
    const wrapper = shallow(<ShuttleForm />)
    const inputEvent = {
      target: {
        name: "riders",
        value: "5"
      }
    }

    wrapper.instance().handleChange(inputEvent);

    expect(wrapper.state('riders')).toEqual(inputEvent.target.value);
  })

  it('should set state of bikes when handleChange is called with an input event', () => {
    const wrapper = shallow(<ShuttleForm />)
    const inputEvent = {
      target: {
        name: "bikes",
        value: "5"
      }
    }

    wrapper.instance().handleChange(inputEvent);

    expect(wrapper.state('bikes')).toEqual(inputEvent.target.value);
  })

  it('should set state of date when handleChange is called with an input event', () => {
    const wrapper = shallow(<ShuttleForm />)
    const inputEvent = {
      target: {
        name: "date",
        value: "1111"
      }
    }

    wrapper.instance().handleChange(inputEvent);

    expect(wrapper.state('date')).toEqual(inputEvent.target.value);
  })

  it('should set state of start time when handleChange is called with an input event', () => {
    const wrapper = shallow(<ShuttleForm />)
    const inputEvent = {
      target: {
        name: "starttime",
        value: "1100"
      }
    }

    wrapper.instance().handleChange(inputEvent);

    expect(wrapper.state('starttime')).toEqual(inputEvent.target.value);
  })

  it('should set state of end time when handleChange is called with an input event', () => {
    const wrapper = shallow(<ShuttleForm />)
    const inputEvent = {
      target: {
        name: "endtime",
        value: "400"
      }
    }

    wrapper.instance().handleChange(inputEvent);

    expect(wrapper.state('endtime')).toEqual(inputEvent.target.value);
  })

})
