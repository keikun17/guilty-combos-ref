'use strict';

var React = require('react/addons');

//var Actions = require('actions/xxx')

require('styles/Combo.sass');

var Combo = React.createClass({

  render: function () {
    return (
        <div className="Combo">
          <p>{this.props.name}</p>
        </div>
      );
  }
});

module.exports = Combo; 

