import reducers from './reducers/index'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const promise = (store) => {
  const next = store.dispatch
  return (action) => {
    if(typeof action.then === 'function'){
      return action.then(next)
    }
    return next(action)
  }
}

export default () => {
  let middlewares = [thunk]
  let store = createStore(reducers, applyMiddleware(...middlewares))
  store.dispatch = promise(store)
  return store
}
