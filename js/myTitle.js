import React from 'react'

var MyTitle = React.createClass({
  render: function () {
    return (
      <div>
        <h1 style={{ color: this.props.color }}>
          {this.props.title}
        </h1>
      </div>
    )
  }
})

export default MyTitle