var Reflux = require('reflux');
var utils = require('rdbutils');

var storage = require('store');
var storeCache = {};

var TodosActionsFactory = require('./todosActions-factory');

module.exports.get = function(id){
  if(!utils.isUndefined(storeCache[id])){
    return storeCache[id];
  }
  
  return create(id);
};

function create(id){
    
  storeCache[id] = Reflux.createStore({

      init : function(){

        this.todos = storage.get('rdb-widget-todos-' + id) || [];
        var TodosActions = TodosActionsFactory.get(id);
        
        this.listenTo(TodosActions.get,this.get);
        this.listenTo(TodosActions.add,this.add);
        this.listenTo(TodosActions.toggle,this.toggle);
      },

      get: function(initialTodos){
                
        // merge todos from local storage with passed todos from the config file.
        initialTodos.forEach(function(el){
          if(!containsTodo(this.todos, el)){
            
            var newTodo = {};
            newTodo.text = el.text;
            newTodo.isDone = el.isDone;
            newTodo.createdAt = new Date();
            
            if(utils.isUndefined(newTodo.isDone)){
              newTodo.isDone = false;
            }
          
            this.todos.push(newTodo);
          }
        }.bind(this));
                
        updateStorage(id, this.todos);

        this.trigger({ 
          data: this.todos
        });
      },

      add: function(newTodo){
        
        this.todos.push(newTodo);

        storage.set('rdb-widget-todos-' + id, this.todos);

        this.trigger({ 
          data: this.todos
        });

      },

      toggle: function(todo){
        var toggleTodo = containsTodo(this.todos, todo);
        toggleTodo.isDone = !toggleTodo.isDone;
        updateStorage(id, this.todos);
        
        this.trigger({ 
          data: this.todos
        });
      }

  });
  
  return storeCache[id];
}


function updateStorage(id, todos){
  storage.set('rdb-widget-todos-' + id, todos);
}

function containsTodo(list, todo){

  var itemFound = false;

  for(var i = 0; i < list.length; i++){
    if(list[i].text === todo.text){
      itemFound = list[i];
      break;
    }
  }

  return itemFound;
}