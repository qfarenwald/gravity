import helpers from './helpers';
import { filteredTrailData } from './helpers'

describe('helpers', () => {

  it('should return an array of filtered movie data', () => {
    const mockApiTrails = [{
      id: 46286,
      name: "Betasso Preserve",
      stars: 4,
      difficulty: "greenBlue",
      descent: -829,
      conditionDate: "2019-10-03 22:57:25",
      conditionStatus: "All Clear",
      latitude: 40.0155,
      longitude: -105.3422,
      summary: "Great trail",
      moreData: "More Data"
    },
    {
      id: 601365,
      name: "Walker Ranch",
      stars: 3.9,
      difficulty: "blueBlack",
      descent: -1510,
      conditionDate: "2019-09-19 07:48:20",
      conditionStatus: "All Clear",
      latitude: 40.0155,
      longitude: -105.3422,
      summary: "Great trail",
      moreData: "More Data"
    }]

    const expectedAction = [{
      id: 46286,
      name: "Betasso Preserve",
      stars: 4,
      difficulty: "greenBlue",
      descent: -829,
      conditionDate: "2019-10-03 22:57:25",
      conditionStatus: "All Clear",
      latitude: 40.0155,
      longitude: -105.3422,
      summary: "Great trail"
    },
    {
      id: 601365,
      name: "Walker Ranch",
      stars: 3.9,
      difficulty: "blueBlack",
      descent: -1510,
      conditionDate: "2019-09-19 07:48:20",
      conditionStatus: "All Clear",
      latitude: 40.0155,
      longitude: -105.3422,
      summary: "Great trail"
    }]

    const result = filteredTrailData(mockApiTrails)

    expect(result).toEqual(expectedAction)
  })

})
