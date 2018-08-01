import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <NavLink to="/home">HOME</NavLink>
      </div>
    );
  }
}

export default Navbar;
