var React = require('react');
var BaseWidget = require('BaseWidget');
   
var Widget = React.createClass({
    
  getDefaultProps: function(){
    return {
      data : []
    }
  },
  
  propTypes: {
    data: React.PropTypes.array
  },

  render: function() {
    
    var style = { width : '100%', height: '100%' },
        notes = this.props.data.map(function(note){
          return <Note {...note}/>;
        }),
        widget = (
          <div className="rdb-widget">
            <ul>
              { notes }
            </ul>
          </div>);
    
    return (
      <BaseWidget {...this.props} widget={widget}/>
    );
  }

});

module.exports = Widget;