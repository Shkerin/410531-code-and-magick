'use strict';

/**
 * Модуль для работы со диалогом редактирования персонажа.
 */

(function () {
  var utils = window.utils;
  var consts = window.const;

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

  wizardCoatElem.addEventListener('click', function () {
    var coatsColor = consts.COATS_COLORS;
    wizardCoatElem.style = 'fill: ' + coatsColor[utils.getRandomInt(coatsColor.length - 1)];
  });

  wizardEyesElem.addEventListener('click', function () {
    var eyesColors = consts.EYES_COLORS;
    wizardEyesElem.style = 'fill: ' + eyesColors[utils.getRandomInt(eyesColors.length - 1)];
  });

  wizardFireballElem.addEventListener('click', function () {
    var fireballColors = consts.FIREBALL_COLORS;
    wizardFireballElem.style = 'background-color: ' +
      fireballColors[utils.getRandomInt(fireballColors.length - 1)];
  });

  window.renderWizards(4);
})();
