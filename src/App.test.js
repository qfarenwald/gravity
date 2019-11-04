import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps } from './App';
import { fetchData } from './utils/apiCalls';
import { getTrails } from './actions';
import { filteredTrailData } from './utils/helpers';

jest.mock('./utils/apiCalls');

describe('App', () => {
  let wrapper;

  const mockGetTrails = jest.fn();

  const mockResponse = {
    trails: [
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
    ],
  };

  const mockTrails = [
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
  ];

  fetchData.mockImplementation(() => Promise.resolve(mockTrails));

  beforeEach(() => {
    wrapper = shallow(<App getTrails={mockGetTrails} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should return array of trails for based on lon and lat interpolated', async () => {
    const mockLat = 39.7392;
    const mockLon = 104.9903;
    const mockUrl = `https://www.mtbproject.com/data/get-trails?lat=${mockLat}&lon=-${mockLon}&maxDistance=10&key=200628346-0f130fc8870531d529e09b85e721317a`;

    await wrapper.instance().getLatLon(mockLat, mockLon);

    expect(trails).toEqual(mockTrails)
  });

  it('should call fetchData, filteredTrailData, and getTrails when getLatLon is called', () => {
    const mockLat = 39.7392;
    const mockLon = 104.9903;
    const mockUrl = `https://www.mtbproject.com/data/get-trails?lat=${mockLat}&lon=-${mockLon}&maxDistance=10&key=200628346-0f130fc8870531d529e09b85e721317a`;
    const filteredTrailData = jest.fn();
    const getTrails = jest.fn();

    wrapper.instance().getLatLon(mockLat, mockLon);

    expect(fetchData).toHaveBeenCalledWith(mockUrl);
    expect(filteredTrailData).toHaveBeenCalledWith(mockTrails);
    expect(getTrails).toHaveBeenCalledWith(mockTrails);
  });
});

describe('mapDispatchToProps', () => {
  it('calls dispatch when a getTrails action is called', () => {
    const mockDispatch = jest.fn();
    const mockGetTrails = jest.fn();
    const filteredTrailData = jest.fn();
    const wrapper = shallow(<App getTrails={mockGetTrails} />);
    const mockTrails = [
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
    ];
    const actionToDispatch = getTrails('GET_TRAILS', mockTrails);
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.getTrails('GET_TRAILS', mockTrails);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
