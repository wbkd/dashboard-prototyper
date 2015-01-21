var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, NotFoundRoute } = Router;

var App = require('./pages/app.jsx');
var NotFound = require('./pages/notFound.jsx');

var Board = require('./components/rdb-board.jsx');

var utils = require('rdbutils');
var boards = require('rdbconf').boards;
var BoardFactory = require('./factories/rdb-board-factory.jsx');

var dynamicRoutes = boards.map(function(board,i){
  var boardName = board.name,
    boardUrl = utils.boardNameToUrl(boardName),
    Board = BoardFactory.create(board);
  
  return <Route key={ 'route-' + i } name={ boardUrl } handler={ Board } />
});

var routes = (
  <Route name="app" path="/" handler={ App }>
    { dynamicRoutes }
    <DefaultRoute handler={ BoardFactory.create(boards[0]) }/>
    <NotFoundRoute handler={ NotFound }/>
  </Route>
);

module.exports = routes;