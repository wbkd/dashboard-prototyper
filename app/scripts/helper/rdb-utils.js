module.exports = {
  
  boardNameToUrl : function(name){
    return name.toLowerCase().replace(/\s/g,'-');
  },
  
  dom : {
    
    get : function(selector){
      return document.querySelector(selector);
    },
    getAll : function(selector){
      return document.querySelectorAll(selector);
    }

  }

};