var React = require('react/addons');
var cx = React.addons.classSet;

var Note = React.createClass({
  
  render: function(){
    var classes = cx({
      'done': this.props.isDone,
      'rdb-widget-notes-note' : true
    });
    
    return (
      <div className={classes}>
        <div><div>
        { this.props.text }
      </div>
    );
  }

});