var Reflux = require('reflux');

var TodosActions = Reflux.createActions([
  'get',
  'add',
  'toggle'
]);

module.exports = TodosActions;