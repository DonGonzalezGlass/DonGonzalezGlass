import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = props => {
  return (
    <div className='home-container'>
      <picture>
        <source media='(min-width: 1200px)' srcSet='glass-mobile-min-1200.png' />
        <source media='(min-width: 1800px)' srcSet='glass-mobile-min-1800.png' />
        <source media='(min-width: 900px)' srcSet='glass-mobile-min-900.png' />
        <source media='(min-width: 600px)' srcSet='glass-mobile-min-600.png' />
        <source media='(max-width: 599px)' srcSet='glass-mobile-max-599.png' />
        <img src='glass-mobile-min-1200.png' alt='Hand blown handmade glass art mobile by Don Gonzalez' />
      </picture>
      <div className='heading-container intro'>
        <h3>Contemporary Art Glass designs by Don Gonzalez and his collection of 20th Century Glass</h3>
      </div>
      <div className='heading-container action'>
        <div className='action-row'>
          <h4>Learn the art of glassblowing or glass casting</h4>
          <Link to='/workshops'><button className='action-btn'>Workshops</button></Link>
        </div>
        <div className='action-row'>
          <h4>Handmade glass is one-of-a-kind</h4>
          <Link to='/workshops'><button className='action-btn'>Shop</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
