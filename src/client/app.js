import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { configureStore, history } from './configureStore';
import Routes from './routes';

const store = configureStore();

const App = ({ history }) => (
    <Routes history={history} />
);

App.propTypes = {
  history: PropTypes.object,
};


function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component history={history} />
      </AppContainer>
    </Provider>,
    document.getElementById('react-root'),
  );
}
render(App);
// in charge of maintaining the state during hot reload JS files
if (module.hot) {
  module.hot.accept('./routes.js', () => {
    const NewRoutes = require('./routes.js').default;
    render(NewRoutes);
  });
}