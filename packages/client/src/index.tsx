import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './main.scss';
import App from './components/App/App';
import { store } from './store/store';

asdasd
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
