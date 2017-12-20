'use strict';

(function () {
  var utils = window.utils;

  window.colorizeElement = function (element, array, callback) {
    var color = array[utils.getRandomInt(array.length - 1)];
    callback(element, color);
  };
})();
