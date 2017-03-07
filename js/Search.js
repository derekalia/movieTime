import React from 'react'
import preload from '../public/data.json'
import ShowCard from './ShowCard'

class Search extends React.Component {
  render () {
    return (
      <div className='search'>
        {preload.shows.map(item => {
          return (
            <ShowCard key={item.imdbID} item={item} />
          )
        })}
      </div>
    )
  }
}

export default Search
