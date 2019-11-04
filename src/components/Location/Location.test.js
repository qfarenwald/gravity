import React from 'react';
import ReactDOM from 'react-dom';
import { Location } from './Location';
import { shallow } from 'enzyme';

describe('Location', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Location />)

    expect(wrapper).toMatchSnapshot()
  })

  it.skip('should run getLatLon on click of the first button with Denver lat/lon', () => {
    const mockGetLatLon = jest.fn();
    const wrapper = shallow(<Location getLatLon={mockGetLatLon}/>)

    wrapper.find('button').at(0).simulate('click');

    expect(mockGetLatLon).toHaveBeenCalledWith(39.7392, 104.9903);
  })

  it.skip('should run getLatLon on click of the second button with Boulder lat/lon', () => {
    const mockGetLatLon = jest.fn();
    const wrapper = shallow(<Location getLatLon={mockGetLatLon}/>)

    wrapper.find('button').at(1).simulate('click');

    expect(mockGetLatLon).toHaveBeenCalledWith(40.0150, 105.2705);
  })
})
