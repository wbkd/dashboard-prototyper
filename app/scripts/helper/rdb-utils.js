module.exports = {
  
  boardNameToUrl : function(name){
    return name.toLowerCase().replace(/\s/g,'-');
  },
  
  dom : {
    create: function(element){
      return document.createElement(element);
    },
    get : function(selector){
      return document.querySelector(selector);
    },
    getAll : function(selector){
      return document.querySelectorAll(selector);
    }

  }

};