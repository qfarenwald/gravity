import React from 'react';
import ReactDOM from 'react-dom';
import { Location } from './Location';
import { shallow } from 'enzyme';

describe('Location', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Location />)

    expect(wrapper).toMatchSnapshot()
  })
})
