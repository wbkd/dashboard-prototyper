var React = require('react/addons');
var cx = React.addons.classSet;


var Todo = React.createClass({
  
  toggle : function(){
    this.props['actions'].toggle(this.props);
  },
  
  render: function(){
    var classes = cx({
      'is-done': this.props.isDone   
    });
        
    return (
      <li className={classes}  onClick={this.toggle}>
        { this.props.text }
      </li>
    );
  }

});

module.exports = Todo;