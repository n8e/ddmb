import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store';

export const store = configureStore();

ReactDOM.render((
  <BrowserRouter>
    <Root store={store} />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
