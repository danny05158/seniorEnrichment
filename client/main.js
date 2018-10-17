import React from 'react';
// import {render} from 'react-dom'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Main } from './components/Main';

import store from './store';
import Root from './components/Root';

// render(
//   <Provider store={store}>
//     <Root />
//   </Provider>,
//   document.getElementById('app')
// )

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Root />
    </Provider>
  </Router>,
  document.getElementById('app')
);
