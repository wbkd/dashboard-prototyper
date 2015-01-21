/**
 * This Mixin holds functions and properties that are used by all widgets.
 * 
 */ 

var React = require('react');

var WidgetMixin = {
  
  getDefaultProps: function(){
    return {
      title : ''
    }
  },
  
  propTypes: {
    title : React.PropTypes.string
  },
  
  getTitle : function(){
    return this.props.title ? <div className="rdb-widget-title">{this.props.title}</div> : '';
  }

}

module.exports = WidgetMixin;