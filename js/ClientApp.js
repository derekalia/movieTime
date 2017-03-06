/* global React ReactDOM */
var div = React.DOM.div
var h1 = React.DOM.h1

var myTitle = React.createClass({
  render: function () {
    return (
            div(null,
                h1({style: {color: this.props.color, fontweight: 'bold'}}, this.props.title)
            )
    )
  }
})

var myTitleFactory = React.createFactory(myTitle)

var myFirstComponent = React.createClass({
  render: function () {
    return (
            div(null,
                myTitleFactory({title: 'props are amazing!', color: 'peru'}),
                myTitleFactory({title: 'props are amazing!1', color: 'wheat'}),
                myTitleFactory({title: 'props are amazing!2', color: 'mediumaquamarine'}),
                myTitleFactory({title: 'props are amazing!3', color: 'rebeccapurple'}),
                myTitleFactory({title: 'props are amazing!4', color: 'darkvioletred'})
            )
    )
  }
})

ReactDOM.render(React.createElement(myFirstComponent), document.getElementById('app'))
