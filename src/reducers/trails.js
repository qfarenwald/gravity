export const trails = (state = [], action) => {
  switch(action.type) {
    case 'GET_TRAILS':
    console.log('hello')
    console.log('at', action.trails)
      return action.trails
    default:
      return state
  }
}
