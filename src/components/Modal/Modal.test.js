import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Modal } from './Modal';

describe('Modal', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Modal />);

    expect(wrapper).toMatchSnapshot();
  });
});
