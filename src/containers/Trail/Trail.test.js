import React from 'react';
import ReactDOM from 'react-dom';
import { Trail } from './Trail';
import { shallow } from 'enzyme';

describe('Trail', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Trail />)

    expect(wrapper).toMatchSnapshot()
  })
})
