import React from 'react'
import preload from '../public/data.json'

class Search extends React.Component {
  render () {
    return (
      <div className='search'>
        <pre><code>{JSON.stringify(preload, null, 4)}</code></pre>
        <h1>Search Page!!</h1>
      </div>
    )
  }
}

export default Search
