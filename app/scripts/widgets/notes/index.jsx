var React = require('react');
var BaseWidget = require('BaseWidget');

var Note = require('./note.js');
var NotesStore = require('./notesStore.js');
var NotesActions = require('./notesActions.js');

var Widget = React.createClass({
    
  getDefaultProps: function(){
    return {
      data : []
    }
  },
  
  propTypes: {
    data: React.PropTypes.array
  },
  
  componentDidMount: function(){
    this.unsubscribe = NotesStore.listen(this.onStatusChange);
    
    NotesActions.getNotes();
  },
  
  conponentWillUnmount: function(){
    this.unsubscribe();
  },
  
  onStatusChange: function(state){
    this.setState(state);
  },

  render: function() {
    
    var style = { width : '100%', height: '100%' },
        notes = this.props.data.map(function(note){
          return <Note {...note}/>;
        }),
        widget = (
          <div className="rdb-widget rdb-widget-notes">
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