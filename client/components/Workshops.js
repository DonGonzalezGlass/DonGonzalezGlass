import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Workshops.css'

const Workshops = props => {
  return (
    <div className='workshops-container'>
      <div className='title-container'>
        <h1 className='page-title title'>GLASS BLOWING and GLASS CASTING WORKSHOPS</h1>
      </div>
      <div className='text-container'>
        <p>description</p>
      </div>
      <div className='title-container'>
        <h2 className='title'>Glass Blowing</h2>
      </div>
      <div className='text-container'>
        <p>glass blowing description</p>
      </div>
      <div className='title-container'>
        <h2 className='title'>Glass Casting</h2>
      </div>
      <div className='text-container'>
        <p>glass casting description</p>
      </div>

    </div>
  )
}

export default Workshops
