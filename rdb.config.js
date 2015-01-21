module.exports = {
  name: 'RDB',
  style: {
    font: 'PT Sans'
  },
  boards: [
    {
      name: 'site a',
      widgets: [
        { type: 'map',  properties: { title : 'Map Widget' } },
        { type: 'iframe' }
      ]
    }, {
      name: 'site b',
      widgets: [
        { type: 'barchart', properties: { title : 'Bar Chart Widget' } },
        { type: 'linechart' }
      ]
  }]
};