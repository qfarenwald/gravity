import React from 'react';
import ReactDOM from 'react-dom';
import { ShuttleForm } from './ShuttleForm';
import { shallow } from 'enzyme';

describe('ShuttleForm', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<ShuttleForm />)

    expect(wrapper).toMatchSnapshot()
  })
})
