import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { HashRouter as Router } from 'react-router-dom';
import { rootReducer } from './reducers';
import './index.css';
import App from './App';

const store = createStore(rootReducer, composeWithDevTools());

const router = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
