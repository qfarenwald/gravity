import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const store = createStore(rootReducer, composeWithDevTools());

const router = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'));
