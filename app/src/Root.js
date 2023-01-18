import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Container from './components/container/Container';
import NotFound from './components/error/404';

const Root = ({ store }) => (
  <Provider store={store}>
    <Switch>
      <Route exact path='/' component={Container} />
      <Route component={NotFound} />
    </Switch>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;