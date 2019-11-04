import * as actions from '.';

describe('actions', () => {
  describe('getTrails', () => {
    it('should have a type of GET_TRAILS', () => {
      const trails = [
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
      const expectedAction = {
        type: 'GET_TRAILS',
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

      const result = actions.getTrails(trails);

      expect(result).toEqual(expectedAction);
    });
  });

  describe('makeBooking', () => {
    it('should have a type of MAKE_BOOKING', () => {
      const booking = {
        name: 'Dan LeFever',
        email: 'dt.lefever@gmail.com',
        riders: '5',
        bikes: '5',
        date: '1106',
        starttime: '1100',
        endtime: '430',
        formReady: true,
        redirect: false,
      };
      const expectedAction = {
        type: 'MAKE_BOOKING',
        booking: {
          name: 'Dan LeFever',
          email: 'dt.lefever@gmail.com',
          riders: '5',
          bikes: '5',
          date: '1106',
          starttime: '1100',
          endtime: '430',
          formReady: true,
          redirect: false,
        },
      };

      const result = actions.makeBooking(booking);

      expect(result).toEqual(expectedAction);
    });
  });
});
