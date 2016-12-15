import 'global-module';
import {Provider} from 'react-redux'
import Page from './page'
import {init as firebaseInit} from 'javascripts/firebase.js'
import configureStore from 'configureStore'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    firebaseInit()
  }
  render () {
    return (
      <Provider store={configureStore()}>
        <Page />
      </Provider>
    );
  }
}
