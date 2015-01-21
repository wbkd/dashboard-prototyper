/**
 * The Sidebar displays the links to the boards and the title of the dashboard
 * application.
 */

var React = require('react');
var Link = require('react-router').Link;
var utils = require('rdbutils');
var rdbConf = require('rdbconf');

var Sidebar = React.createClass({

  render: function() {
    
    var navItems = rdbConf.boards.map(function(board,i){
      
      var boardName = board.name,
          boardUrl = utils.boardNameToUrl(boardName);
      
      return <Link className="nav-item" key={ "nav-item-" + i } to={ boardUrl }>{ boardName }</Link>
    });
    
    return (
      <div className="rdb-sidebar">
        <div className="rdb-title">{ rdbConf.name || 'RDB Dashboard' }</div>

        <nav>
          { navItems }
        </nav>
      </div>
    );
  }

});

module.exports = Sidebar;