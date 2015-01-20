var React = require('react');
var WidgetMixin = require('WidgetMixin');
   
var Widget = React.createClass({
  
  mixins: [WidgetMixin],
  
  getDefaultProps: function(){
    return {
      src : 'http://news.ycombinator.com'
    }
  },
  
  propTypes: {
    src: React.PropTypes.string
  },

  render: function() {
    
    var style = { width : '100%', height: '100%' };
    
    return (
      <div className="rdb-widget-wrapper rdb-widget-iframe">
        <div className="rdb-widget-content">
          { this.getTitle() }
          <div className="rdb-widget">
            <iframe src={this.props.src} frameBorder="0" style={ style }></iframe>
          </div> 
        </div>
      </div>
    );
  }

});

module.exports = Widget;