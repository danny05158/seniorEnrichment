import React, { Component } from 'react';
import Navbar from './Navbar';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Countries from './Countries';
import TopFive from './TopFive';
import Aircrafts from './Aircrafts'
import SingleAircraft from './SingleAircraft';
import SingleCountry from './SingleCountry';
import CreateCountry from './CreateCountry';
import CreateAircraft from './CreateAircraft';
import UpdateCountry from './UpdateCountry';
import UpdateAircraft from './UpdateAircraft';

export default class Root extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <main>
            <Switch>
              <Route exact path="/" component={TopFive} />

              <Route exact path="/countries" component={Countries} />
              <Route path="/countries/updateCountry/:countryId" component={UpdateCountry} />
              <Route exact path="/countries/createCountry" component={CreateCountry} />
              <Route path="/countries/:countryId" component={SingleCountry} />

              <Route exact path="/aircrafts" component={Aircrafts} />
              <Route path="/aircrafts/updateAircraft/:aircraftId" component={UpdateAircraft} />
              <Route path="/aircrafts/createAircraft" component={CreateAircraft} />
              <Route path="/aircrafts/:aircraftId" component={SingleAircraft} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
