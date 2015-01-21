var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, NotFoundRoute } = Router;

var App = require('./pages/rdb-app.jsx');

var ErrorFactory = require('./factories/rdb-errorpage-factory.jsx');
var NotFound = ErrorFactory.create({title: '404', text : 'Route not found.'});
var NoBoard = ErrorFactory.create({title: 'No Boards specified.', text : 'Please specify at least one board in the config file.'});

var utils = require('rdbutils');
var boards = require('rdbconf').boards;
var BoardFactory = require('./factories/rdb-board-factory.jsx');

if(utils.isUndefined(boards)){
  boards = [];
}

var defaultRoute = boards && boards.length > 0 ? BoardFactory.create(boards[0]) : NoBoard;

var dynamicRoutes = boards.map(function(board,i){
  var boardUrl = utils.boardNameToUrl(board.name),
    Board = BoardFactory.create(board);

  return <Route key={ 'route-' + i } name={ boardUrl } handler={ Board } />;
});

var routes = (
  <Route name="app" path="/" handler={ App }>
    { dynamicRoutes }
    <DefaultRoute handler={ defaultRoute }/>
    <NotFoundRoute handler={ NotFound }/>
  </Route>
);

module.exports = routes;