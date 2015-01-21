var React = require('react');

var ErrorPage = React.createClass({

  render: function() {
    return (
      <div className="rdb-errorpage">
        <h1>{ this.props.title }</h1>
        <p>{ this.props.text }</p>
      </div>
    );
  }

});

module.exports = ErrorPage;