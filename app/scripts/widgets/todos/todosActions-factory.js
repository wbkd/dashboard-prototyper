var Reflux = require('reflux');
var utils = require('rdbutils');
var actionsCache = {};

module.exports.get = function(id){
  if(!utils.isUndefined(actionsCache[id])){
    return actionsCache[id];
  }
  
  return create(id);
};

function create(id){
    
  actionsCache[id] = Reflux.createActions([
    'get',
    'add',
    'toggle'
  ]);
  
  return actionsCache[id];
}
