'use strict';

/**
 * Модуль для вспомогательных функций
 */

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

    getRandomInt: function () {
      if (arguments.length === 1) {
        return this._getRandomIntMinMax(0, arguments[0]);
      } else if (arguments.length === 2) {
        return this._getRandomIntMinMax(arguments[0], arguments[1]);
      } else {
        throw new TypeError('Exception of computing a random value: invalid number of arguments');
      }
    },

    _getRandomIntMinMax: function (min, max) {
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

    addClass: function (target, className) {
      if (typeof className !== 'string') {
        throw new TypeError('Exception add class: className is not valid type');
      }

      if (target instanceof HTMLElement) {
        target.classList.add(className);
      } else if (typeof target === 'string') {
        var elem = document.querySelector(target);
        if (elem !== null) {
          elem.classList.add(className);
        }
      } else {
        throw new TypeError('Exception add class: target is not valid type');
      }
    },

    removeClass: function (target, className) {
      if (typeof className !== 'string') {
        throw new TypeError('Exception remove class: className is not valid type');
      }

      if (target instanceof HTMLElement) {
        target.classList.remove(className);
      } else if (typeof target === 'string') {
        var elem = document.querySelector(target);
        if (elem !== null) {
          elem.classList.remove(className);
        }
      } else {
        throw new TypeError('Exception remove class: target is not valid type');
      }
    }
  };
})();
