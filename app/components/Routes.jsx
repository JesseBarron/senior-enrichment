import React, { Component } from 'react';
// import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Campuses from './Campuses';
import Students from './Students';
import CampusProfile from './CampusProfile'
import StudentProfile from './StudentProfile';
import Root from './Root';

const history = createBrowserHistory();

class Routes extends Component {
  render() {
    return (
      <Router >
        <Root>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/campuses' component={ Campuses } />
            <Route path='/campuses/:id' component={ CampusProfile } />
            <Route exact path='/students' component={ Students } />
            <Route path='/students/:id' component={ StudentProfile } />
          </Switch>
        </Root>
      </Router>
    )
  }
}

export default Routes;