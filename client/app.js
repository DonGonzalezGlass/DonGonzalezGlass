import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Home, Navbar } from './components';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route component={Home} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
