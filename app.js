var app = (function (window, document, undefined) {

  'use strict';

  var app = {};

  app.init = function () {
    this.getCanvas('wtf');
  };

  app.getCanvas = function (id) {
    var canvas = document.getElementById(id);
  };

  return app.init();

})(window, document);