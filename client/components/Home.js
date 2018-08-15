import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = props => {
  return (
    <div>
      <picture>
        <source media='(min-width: 1200px)' srcSet='glass-mobile-min-1200.png' />
        <source media='(min-width: 1800px)' srcSet='glass-mobile-min-1800.png' />
        <source media='(min-width: 900px)' srcSet='glass-mobile-min-900.png' />
        <source media='(min-width: 600px)' srcSet='glass-mobile-min-600.png' />
        <source media='(max-width: 599px)' srcSet='glass-mobile-max-599.png' />
        <img src='glass-mobile-min-1200.png' alt='Hand blown glass art mobile by Don Gonzalez' />
      </picture>
      <div>
        <h4>Contemporary Art Glass designs by Don Gonzalez and his collection of 20th Century Glass</h4>
      </div>
      <div>
        <div>
          <h5>Learn the art of glassblowing or glass casting with Don Gonzalez</h5>
          <Link to='/workshops'><button>Workshops</button></Link>
        </div>
        <div>
          <h5>Handmade glass is one-of-a-kind</h5>
          <Link to='/workshops'><button>Shop</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
