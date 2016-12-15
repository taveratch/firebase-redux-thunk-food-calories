import fetch from 'isomorphic-fetch'
import {getFood} from 'javascripts/firebase'

const receiveFood = (food) => {
  return {
    type: 'LOAD_FOOD_SUCCESS',
    food
  }
}

export const loadFood = () => {
  return (dispatch) => {
    dispatch({
      type: 'LOAD_FOOD_REQUEST'
    })
    getFood()
      .then((food) => dispatch(receiveFood(food.val())))
  }
}
