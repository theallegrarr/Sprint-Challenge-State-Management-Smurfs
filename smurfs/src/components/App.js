import React, { Component } from "react";
import "./App.css";

import thunk from 'redux-thunk';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Smurfs from './Smurfs';
import Form from './Form';
import EditForm from './EditForm';
import * as reducers from './state/reducers';

// create a combined reducer (4)
const monsterReducer = combineReducers({
  // the key is the real name for the slice of state
  smurf: reducers.smurfReducer,
  smurfs: [],
});

// feed the createStore the combined reducer (5)
// THERE ARE MANY WAYS TO CREATE A STORE. SEE DOCS!
const store = createStore(
  monsterReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
      <Smurfs />
      <Form />
      <EditForm />
      </Provider>
    );
  }
}

export default App;
