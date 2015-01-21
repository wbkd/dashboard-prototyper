/**
 * Some helper methods we use all over the application.
 */

module.exports = {
  
  /**
   * Translates a name of a board to the related URL.
   * @param   {string}   boardName Name of the board
   * @returns {string} URL of the passed board name.
   */
  boardNameToUrl : function(boardName){
    return boardName.toLowerCase().replace(/\s/g,'-');
  },
  
  isUndefined: function(obj){
    return typeof obj === 'undefined';
  },
  
  /**
  * Helper methods to work with the DOM.
  */
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