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

})
