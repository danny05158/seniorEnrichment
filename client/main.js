import React from 'react';
// import {render} from 'react-dom'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './components/Root';
import store from './store';

import { Grommet } from 'grommet';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

ReactDOM.render(
  <Provider store={store}>
    <Grommet theme={theme}>
      <Root />
    </Grommet>
  </Provider>,
  document.getElementById('app')
);
