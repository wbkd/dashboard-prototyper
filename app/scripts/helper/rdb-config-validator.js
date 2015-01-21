// Do we need something like this?

var utils = require('rdbutils');

module.exports.validate = function(config){
    
  if(utils.isUndefined(config)){
    return false;
  }
  
  if(utils.isUndefined(config.boards)){
    config.boards = [];
  }
  
  if(!utils.isUndefined(config.name) && typeof config.name !== 'String' ){
    return false;
  }
  
  return config;
}