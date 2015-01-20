var getRandomData = function(n){
  var d = [];
 
  for(var i = 0; i < n; i++){
    d.push({ 
      alpha : (Math.random() * 100) + 50, 
      beta : (Math.random() * 100) + 40, 
      gamma : (Math.random() * 100) + 40
    });
  }
  
  return d;
}

var widgetsA = [
  { type: 'map',
    properties: {
      title: 'map title',
      center: [52.52, 13.4],
      zoomLevel : 10,
      marker: [{
        latlng: [52.52, 13.4],
        text : 'This is a marker.'
      },{
        latlng: [52.55, 13.35]
      }]
    }
  },
  { type: 'iframe',
    properties: {
      title : 'test',
      src: 'http://webkid.io'
    }
  }
  
];

var widgetsB = [
  {
    type: 'line',
    properties: {
      title : 'whoop',
      data: getRandomData(25)
    }
  },
  {
    type: 'bar',
    properties: {
      data: getRandomData(50)
    }
  }
];


module.exports = {
  name: 'RDB',
  style: {
    font: 'PT Sans',
    
    titlebg : '#eee',
    titlecol : '#222222',
    
    sidebarbg : '#303030',
    sidebarcol : '#f4f4f4',
    
    boardbg : '#f4f4f4',
    boardcol : '#222222',
    
    widgetbg: '#fff',
    widgetcol: '#222'
  },
  boards: [
    {
      name: 'Site A',
      widgets: widgetsA
    },
    {
      name: 'Site B',
      widgets: widgetsB
    }
  ]
};