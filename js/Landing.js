import React from 'react'
import { Link } from 'react-router-dom' // only thing i need from react dom is the render function

const Landing = () => {
  return (
    <div className='landing'>
      <h1>food</h1>
      <input type='text' placeholder='search' />
      <a>or browse all</a>
      <Link to='/search'>SEARCHHH</Link>
    </div>
  )
}

export default Landing
