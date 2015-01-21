var React = require('react');
var BaseWidget = require('BaseWidget');

var TodosActionsFactory = require('./todosActions-factory');
var TodosStoreFactory = require('./todosStore-factory');

var Todo = require('./todo.jsx');

require('./style.css');

var Widget = React.createClass({
  
  getInitialState: function(){
    return {
      data : []
    }
  },
  
  componentDidMount: function(){

    this.TodosActions = TodosActionsFactory.get(this.props._id);
    this.TodosStore = TodosStoreFactory.get(this.props._id);
    this.unsubscribe = this.TodosStore.listen(this.onStatusChange);
    
    this.TodosActions.get(this.props.data);
  },
  
  conponentWillUnmount: function(){
    this.unsubscribe();
  },
  
  onStatusChange: function(state){
    this.setState(state);
  },
  
  add: function(){
    var newTodo = {};
    newTodo.isDone = false;
    newTodo.text = 'New Todo';
    newTodo.createdAt = new Date();
    
    this.TodosActions.add(newTodo);
  },

  render: function() {
    
    var style = { width : '100%', height: '100%' },
        todos = this.state.data.map(function(todo,i){
          
          todo.actions = this.TodosActions;
          return <Todo key={todo.text + '-' + i} {...todo} />;
        }.bind(this)),
        widget = (
          <div className="rdb-widget rdb-widget-todos">
            <ul>
              { todos }
            </ul>
          
            <div className="rdb-widget-todos-add" onClick={ this.add }>Add Todo</div>
          </div>);
    
    return (
      <BaseWidget {...this.props} widget={widget}/>
    );
  }

});

module.exports = Widget;