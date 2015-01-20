var React = require('react');
var BaseWidget = require('BaseWidget');

var Todo = require('./todo.jsx');
var TodosStore = require('./todosStore.js');
var TodosActions = require('./todosActions.js');
require('./style.css');

var Widget = React.createClass({
    
  getDefaultProps: function(){
    return {
      data : []
    }
  },
  
  propTypes: {
    data: React.PropTypes.array
  },
  
  componentDidMount: function(){
    this.unsubscribe = TodosStore.listen(this.onStatusChange);
    
    TodosActions.get();
  },
  
  conponentWillUnmount: function(){
    this.unsubscribe();
  },
  
  onStatusChange: function(state){
    this.setState(state);
  },
  
  toggle: function(){
    console.log(this);
    //TodosActions.toggle();
  },

  render: function() {
    
    var style = { width : '100%', height: '100%' },
        todos = this.props.data.map(function(todo,i){
          
          if(typeof todo.isDone === 'undefined'){
            todo.isDone = false;
          }
          
          return <Todo key={todo.text + '-' + i} {...todo} />;
        }),
        widget = (
          <div className="rdb-widget rdb-widget-todos">
            <ul>
              { todos }
            </ul>
          </div>);
    
    return (
      <BaseWidget {...this.props} widget={widget}/>
    );
  }

});

module.exports = Widget;