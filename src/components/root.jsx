import 'global-module';
import {Provider} from 'react-redux'
import Page from './page'
import {init as firebaseInit, listenFood} from 'javascripts/firebase.js'
import configureStore from 'configureStore'
import {receiveFood} from 'actions/food'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.store = configureStore();
    firebaseInit()
    listenFood(this.store, receiveFood)
  }
  render () {
    return (
      <Provider store={this.store}>
        <Page />
      </Provider>
    );
  }
}
