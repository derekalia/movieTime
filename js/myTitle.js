var myTitle = React.createClass({
  render: function () {
    return (
            div(null,
                h1({style: {color: this.props.color, fontweight: 'bold'}}, this.props.title)
            )
    )
  }
})