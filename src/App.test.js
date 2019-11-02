import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toMatchSnapshot()
  })
})
