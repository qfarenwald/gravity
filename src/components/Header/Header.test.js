import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Header />)

    expect(wrapper).toMatchSnapshot()
  })
})
