import React from 'react'
import { render } from 'react-dom' // only thing i need from react dom is the render function

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <div className='landing'>
          <h1>food</h1>
          <input type='text' placeholder='search' />
          <a>or browse all</a>
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
