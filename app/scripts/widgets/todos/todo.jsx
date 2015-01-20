var React = require('react/addons');
var cx = React.addons.classSet;
var TodosActions = require('./todosActions.js');

var Todo = React.createClass({
  
  toggle : function(){
    TodosActions.toggle(this.props.text);
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