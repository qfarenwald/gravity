import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { TrailsContainer } from './TrailsContainer';

describe('TrailsContainer', () => {
  const mockMatch = {
    location: {
      pathname: "/hello/hey/hi"
    }
  }

  it('should match snapshot', () => {
    const wrapper = shallow(<TrailsContainer match={mockMatch} trails={[
      {
        key: 46286,
        id: 46286,
        name: 'Betasso Preserve',
        stars: 4,
        difficulty: 'greenBlue',
        descent: -829,
        conditionDate: '2019-10-03 22:57:25',
        conditionStatus: 'All Clear',
      },
      {
        key: 601365,
        id: 601365,
        name: 'Walker Ranch',
        stars: 3.9,
        difficulty: 'blueBlack',
        descent: -1510,
        conditionDate: '2019-09-19 07:48:20',
        conditionStatus: 'All Clear',
      },
    ]}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
