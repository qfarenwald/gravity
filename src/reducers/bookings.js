export const bookings = (state = [], action) => {
  switch (action.type) {
    case 'MAKE_BOOKING':
      return [...state, action.booking];
    default:
      return state;
  }
};
