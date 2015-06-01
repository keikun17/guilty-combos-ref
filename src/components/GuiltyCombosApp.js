'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Combo = require('./Combo');

// CSS
require('normalize.css');
require('../styles/main.css');

var imageURL = require('../images/yeoman.png');

var GuiltyCombosApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <Combo name="Dust Loop" />
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = GuiltyCombosApp;
