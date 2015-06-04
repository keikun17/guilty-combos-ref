'use strict';

describe('Plus', function () {
  var React = require('react/addons');
  var Plus, component;

  beforeEach(function () {
    Plus = require('components/Plus.js');
    component = React.createElement(Plus);
  });

  it('should create a new instance of Plus', function () {
    expect(component).toBeDefined();
  });
});
