'use strict';

/**
 * Модуль для работы со диалогом редактирования персонажа.
 */

(function () {
  var utils = window.utils;
  var consts = window.const;
  var colorizeElement = window.colorizeElement;

  var setupOpenElem = document.querySelector('.setup-open');
  var setupCloseElem = document.querySelector('.setup-close');
  var wizardCoatElem = document.querySelector('.wizard-coat');
  var wizardEyesElem = document.querySelector('.wizard-eyes');
  var wizardFireballElem = document.querySelector('.setup-fireball-wrap');

  var escKeydownHandler = function (evt) {
    utils.isEscEvent(evt, function () {
      var activeElem = document.activeElement;
      if (activeElem && activeElem.classList.contains('setup-user-name')) {
        return;
      }

      hidePopupSetup();
    });
  };

  var showPopupSetup = function () {
    document.addEventListener('keydown', escKeydownHandler);

    utils.removeClass('.setup', 'hidden');
    utils.removeClass('.setup-similar', 'hidden');
  };

  var hidePopupSetup = function () {
    document.removeEventListener('keydown', escKeydownHandler);

    utils.addClass('.setup', 'hidden');
    utils.addClass('.setup-similar', 'hidden');
  };

  setupOpenElem.addEventListener('click', function () {
    showPopupSetup();
  });

  setupCloseElem.addEventListener('click', function () {
    hidePopupSetup();
  });

  setupOpenElem.addEventListener('keydown', function (evt) {
    utils.isEnterEvent(evt, showPopupSetup);
  });

  setupCloseElem.addEventListener('keydown', function (evt) {
    utils.isEnterEvent(evt, hidePopupSetup);
  });

  var fillElement = function (element, color) {
    element.style.fill = color;
  };

  var changeElementBackground = function (element, color) {
    element.style.backgroundColor = color;
  };

  wizardCoatElem.addEventListener('click', function () {
    colorizeElement(wizardCoatElem, consts.COATS_COLORS, fillElement);
  });

  wizardEyesElem.addEventListener('click', function () {
    colorizeElement(wizardEyesElem, consts.EYES_COLORS, fillElement);
  });

  wizardFireballElem.addEventListener('click', function () {
    colorizeElement(wizardFireballElem, consts.FIREBALL_COLORS, changeElementBackground);
  });

  window.renderWizards(4);
})();
