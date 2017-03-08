import React from 'react'
import { Link } from 'react-router-dom' // only thing i need from react dom is the render function

const Landing = () => {
  return (
    <div className='landing'>
      <h1>Rate A Movie</h1>
      <input type='text' placeholder='search' />

      <br />
      <Link to='/search'>Browse All</Link>
    </div>
  )
}

export default Landing
