# React-Dashboard (RDB)

RDB helps you to generate dashboard prototypes very fastly with "configuration over code".
You just need to specify the [boards](#boards) and the belonging [widgets](#widgets) in the [RDB config file](#rdb-config-file) file.
It's also easy to extend RDB by [writing your own widgets](#writing-your-own-widgets).

RDB is based on our [react starterkit](https://github.com/wbkd/react-starterkit).

* [Get Started](#get-started)
* [Documentation](#documentation)
* [Extend RDB](#extend-rdb)


# Get Started

## Clone RDB

```
$ git clone https://github.com/wbkd/react-dashboard.git && cd react-dashboard
```

## Installation

Install all dependencies. 

```
$ npm install
```

## Development

Builds the application and starts a webserver with livereload. By default the webserver starts at port 1337.
You can define a port with `$ gulp --port 3333`.

```
$ gulp
```

## Build

Builds a minified version of the application in the dist folder.

```
$ gulp build --type production
```

# Documentation

## RDB config file

You can find the config file under `app/config/rdb-config.js`.
The config file has three attributes (name, [style](#style) and [boards](#boards) with their [widgets](#widgets)).
The name is displayed at the top of the sidebar as the title of the dashboard. 
Appearance indicates stuff like the font, colors etc and under boards (the important part) you configure the different sites and their related widgets.

Properties:

  * `name` String that defines the dashboard title. Default: 'RDB Dashboard'.
  * `style` Object with [style](#style) properties
  * `boards` Array with [boards](#boards)

Example config file:

```

module.exports = {
  name: 'Awesome dashboard',
  style: {
    font : 'Roboto',
    titlebg : '#eeeeee',
    titlecol : 'red',
    sidebarbg : '#303030',
    sidebarcol : '#f4f4f4',
    boardbg : '#f4f4f4',
    boardcol : '#222222'
  },
  boards: [
    {
      name: 'Site A',
      widgets: [
        {type : 'map', properties: { center : [52.25, 13.4] }}, 
        {type : 'line', properties: { data : jsonObjA }}
      ]
    },
    {
      name: 'Site B',
      widgets: [
        {type : 'map', properties: { center : [52.25, 13.4] }}, 
        {type : 'bar', properties: {  data : jsonObjB }}
      ]
    }
  ]
};

```

## Style

For now it's only possible to tweak some colors and change the font type.
You can find the available fonts and the font loading logic under `app/helper/rdb-font-loader.js`.
The styles are applied in `app/scripts/helper/rdb-style.js`.

Available fonts are:
  * Droid Sans
  * Lato 
  * PT Sans
  * Roboto
  * Open Sans

Properties:

* `font` Font type. Default: `'PT Sans'`
* `titlebg` Background color of the title. Default: `'#eeeeee'`.
* `titlecol` Font color of title. Default: `'#222222'`
* `sidebarbg` Background color of the sidebar. Default:  `'#303030'`
* `sidebarcol` Font color of the sidebar. Default: `'#f4f4f4'`
* `boardbg` Background color of the boards. Default: `'#f4f4f4'`
* `boardcol` Font color of the boards. Default: `'#222222'`


Example style:

```

  style: {
    font : 'PT Sans',
    titlebg : '#eeeeee',
    titlecol : '#222222',
    sidebarbg : '#303030',
    sidebarcol : '#f4f4f4',
    boardbg : '#f4f4f4',
    boardcol : '#222222'
  }
  
```


## Boards

The boards property is an array with board objects. A board object has a name and and several widgets.
When you build the dashboard, the several boards are dynamically generated in `app/scripts/routes.jsx` with the help of `app/scripts/factories/rdb-board-factory.jsx`.
The board component (`app/scripts/components/rdb-board.jsx`) then displays the title and loads its widgets.

Example board:

```javascript

{
  name: 'Site A',
  widgets: [
    {type : 'map', properties: { center : [52.25, 13.4] }}, 
    {type : 'line', properties: { data : jsonObj }}
  ]
}
    
```

## Widgets

The widgets are defined in the board objects. A widget object has a type and properties.
The type specifies the widget type and the properties define all data that get passed to the widget.
Widgets are created in the board component (`app/scripts/components/rdb-board.jsx`) with the help of `app/scripts/factories/rdb-widget-factory.jsx`.

For now there are these widgets available:

* Map Widget
* Bar Chart Widget
* Line Chart Widget
* IFrame Widget

### Map Widget

The map widget is based on [Leaflet](http://leafletjs.com). It displays a map with a certain center and markers with tooltips.

Properties:

  * `title` String that defines the widget title. Default: No Title.
  * `center` Array with Coordinates. Default: `[0,0]`
  * `zoom` Integer with the starting zoom level. Default: `13`.
  * `wmsTileLayerUrl` String that declares the WMS tile layer. Default: `http://tile.stamen.com/toner/{z}/{x}/{y}.png`.
  * `marker` Array with marker objects. Default : No marker.
    * `latlng` Array with Coordinates.
    * `text` String with tooltip content. Default: No content.

Example Map Widget Configuration:

```javascript

{ type: 'map',
  properties: {
    title: 'map title',
    center: [52.52, 13.4],
    zoom : 10,
    marker: [
      { latlng: [52.52, 13.4], text : 'This is a marker.'},
      {latlng: [52.55, 13.35]}
    ]
  }
}

```
Source: [Map Widget](app/scripts/widgets/rdb-widget-map.jsx)


### Bar Chart Widget

The bar chart widget is based on [c3](http://c3js.org).

Properties:

  * `title` String that defines the widget title. Default: No Title.
  * `data` Array with JSON data. Default: [{ alpha: 100, beta : 120, gamma: 110 },{ alpha: 120, beta : 110, gamma: 90 },{ alpha: 75, beta : 100,gamma: 80 }]
  * `keys` Array with keys you want to display. Default: Every key found in the passed data.

Example Map Widget Configuration:

```javascript

{
  type: 'bar',
  properties: {
    title : 'A Line Chart \o/',
    data: [{ alpha: 100, beta : 120, gamma: 110 },{ alpha: 120, beta : 110, gamma: 90 },{ alpha: 75, beta : 100,gamma: 80 }],
    keys : ['alpha', 'gamma']
  }
}

```
Source: [Bar Chart Widget](app/scripts/widgets/rdb-widget-bar.jsx)

### Line Chart Widget

Same configuration as the bar chart widget.

Source: [Line Chart Widget](app/scripts/widgets/rdb-widget-line.jsx)

### IFrame Widget

Displays a certain webpage.

Properties:
  * `title` String that defines the widget title. Default: No Title.
  * `src` String that defines the url you want to display. Default: 'http://news.ycombinator.com'.

Example IFrame Widget Configuration:

```javascript
{
  type: 'iframe',
  properties: {
    title : 'True Reddit',
    src: 'http://www.reddit.com/r/TrueReddit/'
  }
}
```

Source: [IFrame Widget](app/scripts/widgets/rdb-widget-iframe.jsx)



# Extend RDB

### Widgets

Every widgets ships its own dependencies. You can use the css-loader to load CSS dependencies.
The map widget for example loads leaflet.js and the related CSS file:

```
var L = require('leaflet');
require('../../../node_modules/leaflet/dist/leaflet.css');

```



