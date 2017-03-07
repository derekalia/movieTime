import React from 'react'
import preload from '../public/data.json'
import ShowCard from './ShowCard'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.handleSearchTerm = this.handleSearchTerm.bind(this)
  }

  handleSearchTerm (event) {
    this.setState({searchTerm: event.target.value})
  }

  render () {
    return (
      <div className='search'>
        <header>
          <h1>{this.state.searchTerm}</h1>
          <input onChange={this.handleSearchTerm} value={this.state.searchTerm} type='text' placeholder='Search' />
        </header>
        {preload.shows.filter(item => {
          return `${item.title} ${item.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
        })
          .map(item => {
            return (
              <ShowCard key={item.imdbID} item={item} />
            )
          })}
      </div>
    )
  }
}

export default Search
