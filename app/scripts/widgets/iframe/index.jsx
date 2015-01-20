var React = require('react');
var BaseWidget = require('BaseWidget');
   
var Widget = React.createClass({
    
  getDefaultProps: function(){
    return {
      src : 'http://news.ycombinator.com'
    }
  },
  
  propTypes: {
    src: React.PropTypes.string
  },

  render: function() {
    
    var style = { width : '100%', height: '100%' },
        widget = (
          <div className="rdb-widget">
            <iframe src={this.props.src} frameBorder="0" style={ style }></iframe>
          </div>);
    
    return (
      <BaseWidget {...this.props} widget={widget}/>
    );
  }

});

module.exports = Widget;