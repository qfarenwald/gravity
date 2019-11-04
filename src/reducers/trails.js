export const trails = (state = [], action) => {
  switch (action.type) {
    case 'GET_TRAILS':
      return action.trails;
    default:
      return state;
  }
};
