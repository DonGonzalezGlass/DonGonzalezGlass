import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Workshops = props => {
  return (
    <div className='workshops-container'>
      <div>
        <h1>GLASS BLOWING and GLASS CASTING WORKSHOPS</h1>
      </div>
      <div>
        <p>description</p>
      </div>
      <div>
        <h2>Glass Blowing</h2>
      </div>
      <div>
        <p>glass blowing description</p>
      </div>
      <div>
        <h2>Glass Casting</h2>
      </div>
      <div>
        <p>glass casting description</p>
      </div>

    </div>
  )
}

export default Workshops
