import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Home } from './components';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={Home} />
      </Switch>
    );
  }
}
