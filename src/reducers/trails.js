export const trails = (state = [], action) => {
  switch(action.type) {
    case 'GET_TRAILS':
    console.log('GET_TRAILS', action.trails)
      return action.trails
    default:
      return state
  }
}
