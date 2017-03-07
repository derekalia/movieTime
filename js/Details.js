import React from 'react'
const { shape, string } = React.PropTypes

class Details extends React.Component {
  render () {
    const { title, description, year, poster, trailer } = this.props.show
    return (
      <div>
        <h1>open</h1>
        <p>{title}</p>
        <p>{description}</p>
        <p>{year}</p>
        <p>{poster}</p>
        <p>{trailer}</p>
      </div>
    )
  }
}

Details.propsTypes = {
  show: shape({
    title: string,
    year: string,
    poster: string,
    trailer: string,
    description: string
  })
}

export default Details
