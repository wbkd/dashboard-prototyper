var React = require('react');
var WidgetMixin = require('WidgetMixin');

var L = require('leaflet');
require('../../../node_modules/leaflet/dist/leaflet.css');
L.Icon.Default.imagePath = 'images';

var Widget = React.createClass({
  mixins: [WidgetMixin],
  getDefaultProps: function(){
    return {
      center : [0,0],
      marker : null,
      zoomLevel : 13,
      wmsTileLayerUrl : 'http://tile.stamen.com/toner/{z}/{x}/{y}.png'
    }
  },
  
  propTypes: {
    center: React.PropTypes.array,
    marker : React.PropTypes.array,
    zoomLevel : React.PropTypes.number,
    wmsTileLayerUrl : React.PropTypes.string
  },
  
  componentDidMount: function(){
    this.zoomControlOptions = { position: 'bottomright' };
    this.mapDefaultOptions = {zoomControl : false};
    
    this.createMap();
  },
  
  componentWillUnmount: function(){
    this.map.remove();
  },
  
  createMap : function(){
      
    this.map = L.map(this.props._id, this.mapDefaultOptions)
      .setView(this.props.center, this.props.zoomLevel)
      .addControl(L.control.zoom(this.zoomControlOptions))
      .addLayer(L.tileLayer(this.props.wmsTileLayerUrl, {maxZoom: 18}))
                
    this.createMarker();
  },
  
  createMarker : function(){
    if(this.props.marker){
      this.props.marker.forEach(function(marker,i){
        var mapMarker = L.marker(marker.latlng, {title: marker.text}).addTo(this.map);
        
        if(marker.text){
          mapMarker.bindPopup(marker.text)
        }
      }.bind(this));
    }
  },

  
  render: function() {
    
    return (
      <div className="rdb-widget-wrapper rdb-widget-map">
        <div className="rdb-widget-content">
          { this.getTitle() }
          <div className="rdb-widget">
            <div className="map" id={ this.props._id }></div>
          </div> 
        </div>
      </div>
    );
  }

});

module.exports = Widget;