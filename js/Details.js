import React from 'react'
import Header from './Header'
const { shape, string } = React.PropTypes

class Details extends React.Component {
  render () {
    console.log(this.props)
    const { title, description, year, poster, trailer } = this.props.show
    return (
      <div>
        <Header />
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
