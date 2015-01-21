var React = require('react');
var BaseWidget = require('BaseWidget');
   
var Widget = React.createClass({
  
  render: function() {

    var items = this.props.data.map(function(item,i){
        return <li key={ item + '-' + i + (+new Date()) }>{item}</li>
      }),widget = (
          <div className="rdb-widget"> 
            <ul>{ items }</ul>
          </div>);

    return (
      <BaseWidget { ...this.props } widget={ widget }/>
    );
  }

});

module.exports = Widget;