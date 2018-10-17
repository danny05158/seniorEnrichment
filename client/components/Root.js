import React, { Component } from 'react';
import Navbar from './Navbar'
import { Route, Switch, Redirect} from 'react-router-dom';
import Countries from './Countries'


export default class Root extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main>
            <Route path="/countries" component={Countries} />
        </main>
      </div>
    );
  }
}
