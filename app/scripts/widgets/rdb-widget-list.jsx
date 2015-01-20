var React = require('react');
var WidgetMixin = require('WidgetMixin');
   
var Widget = React.createClass({
  mixins: [WidgetMixin],
  
  render: function() {

    var items = this.props.data.map(function(item,i){
        return <li key={item + '-' + i + (+new Date())}>{item}</li>
      });
  
    return (
      <div className="rdb-widget-wrapper rdb-widget-list">
        <div className="rdb-widget-content">
          { this.getTitle() }
          <div className="rdb-widget"> 
            <ul>
            { items }
            </ul>
          </div> 
        </div>
      </div>
    );
  }

});

module.exports = Widget;