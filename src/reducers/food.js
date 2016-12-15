let initialState = {}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'LOAD_FOOD_REQUEST':
      console.log('Loading food')
      return state
    case 'LOAD_FOOD_SUCCESS':
      console.log('Loaded food')
      return action.food
    default:
      return state
  }
}
