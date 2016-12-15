import reducers from './reducers/index'
import {createStore, applyMiddleware} from 'redux'

const promise = (store) => {
  const next = store.dispatch
  return (action) => {
    if(typeof action.then === 'function'){
      return action.then(next)
    }
    return next(action)
  }
}

const thunk = (store) => (next) => (action) => {
  typeof action === 'function' ?
    action(store.dispatch, store.getState) :
    next(action)
}

export default () => {
  let middlewares = [thunk]
  let store = createStore(reducers, applyMiddleware(...middlewares))
  store.dispatch = promise(store)
  return store
}
