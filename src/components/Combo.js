'use strict';

var React = require('react/addons');
var MoveInput = require('./MoveInput');

//var Actions = require('actions/xxx')

require('styles/Combo.sass');

var Combo = React.createClass({

  render: function () {
    return (
      <div className="Combo">
        <p>{this.props.name}</p>
        <ul>
          {this.props.move_inputs.map(function(input){
            return <MoveInput key={input.id} input={input} />;
          })}
        </ul>
      </div>
    );
  }

});


module.exports = Combo;

