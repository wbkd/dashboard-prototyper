var Reflux = require('reflux');
var store = require('store');

var NotesActions = require('./notesActions');

var Store = Reflux.createStore({

  init : function(){
    this.notes = [];

    this.listenTo(NotesActions.getNotes,this.getNotes);
    this.listenTo(NotesActions.addNote,this.addNote);
  },

  getNotes: function(){
    
    this.notes = store.get('notes') || [];
    
    this.trigger({ 
      data: this.notes
    });
  },
  
  addNote: function(note){
    
    this.notes = store.get('notes') || [];
    this.notes.push(note);
    
    store.set('notes', this.notes);
    
    this.trigger({ 
      data: this.notes
    });
    
  },
  
  removeNote: function(){
    
  }

});

module.exports = Store;