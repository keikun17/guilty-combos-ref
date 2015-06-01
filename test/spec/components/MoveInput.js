'use strict';

describe('MoveInput', function () {
  var React = require('react/addons');
  var MoveInput, component;

  beforeEach(function () {
    MoveInput = require('components/MoveInput.js');
    component = React.createElement(MoveInput);
  });

  it('should create a new instance of MoveInput', function () {
    expect(component).toBeDefined();
  });
});
