import { trails } from '../reducers/trails';

describe('trails', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = trails(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should retirieve trails from api', () => {
    const initialState = [];
    const mockApiTrails = [{
      key: 46286,
      id: 46286,
      name: "Betasso Preserve",
      stars: 4,
      difficulty: "greenBlue",
      descent: -829,
      conditionDate: "2019-10-03 22:57:25",
      conditionStatus: "All Clear"
    },
    {
      key: 601365,
      id: 601365,
      name: "Walker Ranch",
      stars: 3.9,
      difficulty: "blueBlack",
      descent: -1510,
      conditionDate: "2019-09-19 07:48:20",
      conditionStatus: "All Clear"
    }]
    const state = initialState;
    const action = {
      type: 'GET_TRAILS',
      trails: mockApiTrails
    }
    const newState = mockApiTrails;
    const result = trails(state, action);

    expect(result).toEqual(newState);
  });

});
