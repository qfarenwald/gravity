import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from './Modal';
import { shallow } from 'enzyme';

describe('Modal', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Modal />)

    expect(wrapper).toMatchSnapshot()
  })
})
