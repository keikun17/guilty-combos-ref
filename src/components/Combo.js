'use strict';

var React = require('react/addons');
var MoveInput = require('./MoveInput');
var Plus = require('./Plus');

//var Actions = require('actions/xxx')

require('styles/Combo.sass');

var Combo = React.createClass({

  render: function () {
    return (
      <div className="Combo">
        <p>{this.props.name}</p>
        <ul>
          {this.props.move_inputs.map(function(input){
            return <div className="component-group" key={input.id}>
              <MoveInput input={input} />
              <Plus key={input.id} />
            </div>;
        })}
        </ul>
      </div>
    );
  }

});


module.exports = Combo;

