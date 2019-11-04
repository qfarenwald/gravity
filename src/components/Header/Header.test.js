import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('Header', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });
});
