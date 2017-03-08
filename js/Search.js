import React from 'react'
import ShowCard from './ShowCard'
import Header from './Header'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.handleSearchTerm = this.handleSearchTerm.bind(this)
  }
  handleSearchTerm (event) {
    this.setState({ searchTerm: event.target.value })
  }

  render () {
    return (
      <div className='search'>
        <h1>pick a movie</h1>
        <Header
          addToMovies={this.props.addToMovies}
          showSearch
          searchTerm={this.state.searchTerm}
          handleSearchTerm={this.handleSearchTerm}
        />
        <h1>{this.state.searchTerm}</h1>
        {this.props.shows.filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
          .map(show => <ShowCard key={show.imdbID} show={show} />)
        }
      </div>
    )
  }
}

export default Search
