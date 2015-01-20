var React = require('react');
var BaseWidget = require('./rdb-base-widget.jsx');
   
var Widget = React.createClass({
  
  render: function() {

    var items = this.props.data.map(function(item,i){
        return <li key={item + '-' + i + (+new Date())}>{item}</li>
      }),widget = (
          <div className="rdb-widget"> 
            <ul>{ items }</ul>
          </div>);

    return (
      <BaseWidget {...this.props} widget={widget}/>
    );
  }

});

module.exports = Widget;