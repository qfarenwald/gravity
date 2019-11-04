import { fetchData } from './apiCalls';

describe('fetchData', () => {
  const mockResponse = {
    results: [{
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
    }],
  };

  const mockUrl = 'https://www.mtbproject.com/data/get-trails?lat=39.7392&lon=-104.9903&maxDistance=10&key=200628346-0f130fc8870531d529e09b85e721317a';

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    }));
  });

  it('should fetch with the correct url', () => {
    fetchData(mockUrl);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  });

  it('should return an array of trails (HAPPY)', () => {
    fetchData(mockUrl)

      .then((results) => expect(results).toEqual(mockResponse));
  });

  it('should return an error (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Invalid API key: You must be granted a valid key.',
    }));

    const mockUrl = 'https://www.mtbproject.com/data/get-trails?lat=39.7392&lon=-104.9903&maxDistance=10&key=200628346-0f130fc8870531d529e09b85e721317a';

    expect(fetchData(mockUrl)).rejects.toEqual(Error('Invalid API key: You must be granted a valid key.'));
  });

  it('should return an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 500
    }))

    expect(fetchData()).rejects.toEqual(Error());
  });

});
