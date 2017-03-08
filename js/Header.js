import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.addMovie = this.addMovie.bind(this)
  }

  addMovie () {
    axios.get(`/moviesOIMDB/${this.props.searchTerm}`)
      .then((res) => {
        console.log('im in add movie ', res)
        this.props.addToMovies(res.data.movie)
      })
  }

  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace =
        <div><input onChange={this.props.handleSearchTerm} value={this.props.searchTerm} type='text' placeholder='Search' /><button onClick={() => this.addMovie()}>Find</button></div>
    } else {
      utilSpace = (
        <h2>
          <Link to='/search'>Back</Link>
        </h2>
      )
    }

    return (
      <header>
        <h1>
          <Link to='/'>Home</Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}

const { func, bool, string } = React.PropTypes
Header.propTypes = {
  handleSearchTerm: func,
  showSearch: bool,
  searchTerm: string
}

export default Header
