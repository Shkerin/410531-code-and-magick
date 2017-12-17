'use strict';

(function () {
  var setupOpenElem = document.querySelector('.setup-open');
  var setupCloseElem = document.querySelector('.setup-close');
  var wizardCoatElem = document.querySelector('.wizard-coat');
  var wizardEyesElem = document.querySelector('.wizard-eyes');
  var wizardFireballElem = document.querySelector('.setup-fireball-wrap');

  var escKeydownHandler = function (evt) {
    window.utils.isEscEvent(evt, function () {
      var activeElem = document.activeElement;
      if (activeElem && activeElem.classList.contains('setup-user-name')) {
        return;
      }

      hidePopupSetup();
    });
  };

  var showPopupSetup = function () {
    document.addEventListener('keydown', escKeydownHandler);

    window.utils.removeClass('.setup', 'hidden');
    window.utils.removeClass('.setup-similar', 'hidden');
  };

  var hidePopupSetup = function () {
    document.removeEventListener('keydown', escKeydownHandler);

    window.utils.addClass('.setup', 'hidden');
    window.utils.addClass('.setup-similar', 'hidden');
  };

  setupOpenElem.addEventListener('click', function () {
    showPopupSetup();
  });

  setupCloseElem.addEventListener('click', function () {
    hidePopupSetup();
  });

  setupOpenElem.addEventListener('keydown', function (evt) {
    window.utils.isEnterEvent(evt, showPopupSetup);
  });

  setupCloseElem.addEventListener('keydown', function (evt) {
    window.utils.isEnterEvent(evt, hidePopupSetup);
  });

  wizardCoatElem.addEventListener('click', function () {
    var coatsColor = window.const.COATS_COLORS;
    wizardCoatElem.style = 'fill: ' + coatsColor[window.utils.getRandomInt(coatsColor.length - 1)];
  });

  wizardEyesElem.addEventListener('click', function () {
    var eyesColors = window.const.EYES_COLORS;
    wizardEyesElem.style = 'fill: ' + eyesColors[window.utils.getRandomInt(eyesColors.length - 1)];
  });

  wizardFireballElem.addEventListener('click', function () {
    var fireballColors = window.const.FIREBALL_COLORS;
    wizardFireballElem.style = 'background-color: ' +
      fireballColors[window.utils.getRandomInt(fireballColors.length - 1)];
  });

  window.renderWizards(4);
})();
