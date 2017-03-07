import React from 'react'
import { render } from 'react-dom' // only thing i need from react dom is the render function
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './Landing'
import Search from './Search'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='app'>
          <Route exact path='/' component={Landing} />
          <Route path='/search' component={Search} />
        </div>
      </Router>
    )
  }
}

render(<App />, document.getElementById('app'))
