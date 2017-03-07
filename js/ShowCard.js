import React from 'react'
const { shape, string } = React.PropTypes

const ShowCard = (props) => {
  propTypes: {
    item: shape({
      poster: string,
      title: string,
      year: string,
      description: string
    })
  }
  const { title, poster, year, description } = props.item
  return (
    <div className='showCard'>
      <h2>{title}</h2>
      <img src={`/public/img/posters/${poster}`} />
      <h3>{year}</h3>
      <p>{description}</p>
    </div>
  )
}

export default ShowCard
