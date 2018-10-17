import React from 'react';
// import {render} from 'react-dom'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import  Root  from './components/Root';

import store from './store';
// import Root1 from './components/Root1';

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
