var Reflux = require('reflux');
var store = require('store');

var TodosActions = require('./todosActions');

var Store = Reflux.createStore({

  init : function(){
    this.todos = [];

    this.listenTo(TodosActions.get,this.get);
    this.listenTo(TodosActions.add,this.add);
    this.listenTo(TodosActions.toggle,this.toggle);
  },

  get: function(){
    
    this.todos = store.get('todos') || [];
    
    this.trigger({ 
      data: this.todos
    });
  },
  
  add: function(todo){
    
    this.todos.push(todo);
    
    store.set('notes', this.todos);
    
    this.trigger({ 
      todos: this.todos
    });
    
  },
  
  toggle: function(text){
    this.todos.forEach(function(todo){
      
    });
  }

});

module.exports = Store;