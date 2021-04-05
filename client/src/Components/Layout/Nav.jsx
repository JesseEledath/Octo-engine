
import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <header>
      <Link to='/'>
        <h1>Octo-Trainer</h1>
      </Link>
      <hr />
      <div className='nav-links'>
        <Link to='/workouts'>Workouts</Link>
        <Link to='/foods'>Food Tracker</Link>
      </div>
    </header>
  )
}