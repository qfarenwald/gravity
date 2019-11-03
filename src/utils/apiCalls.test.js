import { fetchData } from './apiCalls';

describe('fetchData', () => {

  let mockResponse = {
    "results": [{
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
  };

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should fetch with the correct url', () => {
    const mockUrl = 'https://www.mtbproject.com/data/get-trails?lat=39.7392&lon=-104.9903&maxDistance=10&key=200628346-0f130fc8870531d529e09b85e721317a'

    fetchData(mockUrl);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  });

});
