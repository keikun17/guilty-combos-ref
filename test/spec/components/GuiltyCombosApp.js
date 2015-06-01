'use strict';

describe('GuiltyCombosApp', function () {
  var React = require('react/addons');
  var GuiltyCombosApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    GuiltyCombosApp = require('components/GuiltyCombosApp.js');
    component = React.createElement(GuiltyCombosApp);
  });

  it('should create a new instance of GuiltyCombosApp', function () {
    expect(component).toBeDefined();
  });
});
