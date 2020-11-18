import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import manageUsers from './reducers/manageUsers'


// add imports and code
let store = createStore(manageUsers, window.__REDUX_DEVTOOLS_EXTENSIONS__ && window.__REDUX_DEVTOOLS_EXTENSIONS__())

ReactDOM.render(
  // add imports and code
  <Provider store={store} >
    <App />
  {/* // add imports and code */}
  </Provider>,
  document.getElementById('root')
);
