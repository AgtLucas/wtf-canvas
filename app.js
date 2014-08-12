/**
 * App
 * @param  {obj} window    Window object
 * @param  {obj} document  Document object
 * @param  {} undefined
 * @return {obj}           Return drawCanvas
 */
var app = (function (window, document, undefined) {

  'use strict';

  var app = {};

  // Init app
  app.init = function () {
    this.drawCanvas();
  };

  // Helper to get Canvas
  app.getCanvas = function (id) {
    var canvas = document.getElementById(id);

    return canvas;
  };


  // Helper to get Canvas Context
  app.canvasContext = function (id, ctx) {
    var canvas = this.getCanvas(id);
    canvas = canvas.getContext(ctx);

    return canvas;
  };

  // Draw some squares on canvas
  app.drawCanvas = function () {
    var canvasContext = this.canvasContext('wtf', '2d');

    canvasContext.fillStyle = "rgb(200,0,0)";
    canvasContext.fillRect(10, 10, 55, 50);

    canvasContext.fillStyle = "rgba(0, 0, 200, 0.5)";
    canvasContext.fillRect(30, 30, 55, 50);
  };

  // Returnnnnn the objectttttttt!
  return app.init();

})(window, document);