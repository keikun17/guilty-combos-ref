'use strict';

var React = require('react/addons');

//var Actions = require('actions/xxx')

require('styles/Plus.sass');

var Plus = React.createClass({

  render: function () {
    return (
        <div className="plus-container">
          <div className="Plus">
            +
          </div>
        </div>
      );
  }
});

module.exports = Plus; 

