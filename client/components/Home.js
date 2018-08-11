import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = props => {
  return (
    <div>
      <picture>
        <source media='(max-width: )' srcset='' />
        <source media='(max-width: )' srcset='' />
        <img src='' alt='Hand blown glass mobile by Don Gonzalez' />
      </picture>
      <div>
        <h4>Contemporary Art Glass designs by Don Gonzalez and his collection of 20th Century Glass</h4>
      </div>
      <div>
        <h5>Learn the art of glassblowing or glass casting with Don Gonzalez</h5>
        <Link to='/workshops'><button>Workshops</button></Link>
      </div>
      {/* <div>
        <h5>Find the perfect ???</h5>
        <Link to='/workshops'><button>Workshops</button></Link>
      </div> */}
    </div>
  );
}

export default Home;
