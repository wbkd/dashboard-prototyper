var Reflux = require('reflux');

var NotesActions = Reflux.createActions([
  'getNotes',
  'addNote'
]);

module.exports = NotesActions;