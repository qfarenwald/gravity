import { bookings } from './bookings';

describe('bookings', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = bookings(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should add booking to state', () => {
    const initialState = [];
    const mockNewBooking = {
      name: 'Quinne Farenwald',
      email: 'q.farenwald@gmail.com',
      riders: '4',
      bikes: '4',
      date: '1211',
      starttime: '1030',
      endtime: '6',
      formReady: true,
      redirect: false,
    };
    const state = initialState;
    const action = {
      type: 'MAKE_BOOKING',
      booking: mockNewBooking,
    };

    const newState = [...initialState, mockNewBooking];

    const result = bookings(state, action);

    expect(result).toEqual(newState);
  });
});
