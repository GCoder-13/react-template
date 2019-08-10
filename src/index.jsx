import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import Redbox from 'redbox-react';
import Routes from '@/routes';
import '@/assets/styles/main.scss';

const Root = props => (
  <Router>
    { props.children }
  </Router>
);

Root.propTypes = {
  children: PropTypes.node.isRequired,
};

render(
  process.env.NODE_ENV === 'development' ? (
    <AppContainer errorReporter={Redbox}>
      <Root>
        <Routes />
      </Root>
    </AppContainer>
  ) : (
    <Root>
      <Routes />
    </Root>
  ),
  document.getElementById('root'),
);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('@/routes', () => {
    // eslint-disable-next-line global-require
    const NewRoutes = require('@/routes').default;

    render(
      <AppContainer errorReporter={Redbox}>
        <Root>
          <NewRoutes />
        </Root>
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}
