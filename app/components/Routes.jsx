import React, { Component } from 'react';
// import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Campuses from './Campuses';
import Students from './Students';
import Root from './Root';

const history = createBrowserHistory();

class Routes extends Component {
  render() {
    return (
      <Router >
        <Root>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/campuses' component={ Campuses } />
            <Route path='/students' component={ Students } />
          </Switch>
        </Root>
      </Router>
    )
  }
}

export default Routes;