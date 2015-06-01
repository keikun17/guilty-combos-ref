'use strict';

describe('Combo', function () {
  var React = require('react/addons');
  var Combo, component;

  beforeEach(function () {
    Combo = require('components/Combo.js');
    component = React.createElement(Combo);
  });

  it('should create a new instance of Combo', function () {
    expect(component).toBeDefined();
  });
});
