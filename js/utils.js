'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.utils = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },

    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },

    isNumeric: function (num) {
      return !isNaN(parseFloat(num)) && isFinite(num);
    },

    getRandomInt: function (max) {
      return this.getRandomIntMinMax(0, max);
    },

    getRandomIntMinMax: function (min, max) {
      if (!this.isNumeric(min) || !this.isNumeric(max)) {
        throw new TypeError('Exception of computing a random number: min or max is not numeric');
      } else if (min > max) {
        throw new RangeError('Exception of computing a random number: min > max');
      } else if (min === max) {
        return min;
      }

      var rand = Math.random() * (max - min + 1);
      return Math.floor(rand) + min;
    },

    addClass: function (selector, className) {
      var elem = document.querySelector(selector);
      if (elem !== null) {
        elem.classList.add(className);
      }
    },

    removeClass: function (selector, className) {
      var elem = document.querySelector(selector);
      if (elem !== null) {
        elem.classList.remove(className);
      }
    }
  };
})();
