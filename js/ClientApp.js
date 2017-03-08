import React from 'react'
import { render } from 'react-dom' // only thing i need from react dom is the render function
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import preload from '../public/data.json'
import axios from 'axios'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: [], 
      reviews: []
    }
    this.getMovies()
    this.getMovies = this.getMovies.bind(this)
  }

  getMovies () {
    axios.get('/movies')
      .then(res => {
        this.setState({
          movies: res.data
        })
        console.log('in getMovies', res.data)
      })
  }


  render () {
    return (
      <Router>
        <div className='app'>
          <Route exact path='/' component={Landing} />
          <Route
            path='/search'
            component={(props) => <Search addToMovies={this.getMovies} shows={this.state.movies} {...props} />}
          />
          <Route
            path='/details/:id'
            component={(props) => {
              console.log(props.match.params.id)
              const shows = this.state.filter((show) => props.match.params.id === show.imdbID)
              return <Details show={shows[0]} {...props} />
            }}
          />
        </div>
      </Router>
    )
  }
}

render(<App />, document.getElementById('app'))
