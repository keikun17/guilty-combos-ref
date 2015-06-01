'use strict';

var React = require('react/addons');

//var Actions = require('actions/xxx')

require('styles/MoveInput.sass');

var MoveInput = React.createClass({

  render: function () {
    return (
        <div className="MoveInput">
          {this.props.input}
        </div>
      );
  }
});

module.exports = MoveInput; 

