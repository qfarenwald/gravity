export const bookings = (state = [], action) => {
  switch(action.type) {
    case 'MAKE_BOOKING':
      return action.booking
    default:
      return state
  }
}
