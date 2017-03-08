import React from 'react'
import { Link } from 'react-router-dom'
const { string } = React.PropTypes

class ShowCard extends React.Component {
  render () {
    const { title, poster, year, description, imdbID } = this.props.show
    return (
      <Link to={`/details/${imdbID}`}>
        <div className='showCard'>
          <h2>{title}</h2>
          <img src={`/public/img/posters/${poster}`} />
          <h3>{year}</h3>
          <p>{description}</p>
        </div>
      </Link>
    )
  }
}

ShowCard.propTypes = {
  poster: string,
  title: string,
  year: string,
  description: string
}

export default ShowCard
