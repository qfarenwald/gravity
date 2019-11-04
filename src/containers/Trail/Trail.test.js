import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Trail } from './Trail';

describe('Trail', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Trail />);

    expect(wrapper).toMatchSnapshot();
  });
});
