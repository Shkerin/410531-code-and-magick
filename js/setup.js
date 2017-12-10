'use strict';

(function () {
  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;

  var isNumeric = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  };

  var getRandomInt = function (max) {
    return getRandomIntMinMax(0, max);
  };

  var getRandomIntMinMax = function (min, max) {
    if (!isNumeric(min) || !isNumeric(max)) {
      throw new TypeError('Exception of computing a random number: min or max is not numeric');
    } else if (min > max) {
      throw new RangeError('Exception of computing a random number: min > max');
    } else if (min === max) {
      return min;
    }

    var rand = Math.random() * (max - min + 1);
    return Math.floor(rand) + min;
  };

  var addClass = function (selector, className) {
    var elem = document.querySelector(selector);
    if (elem !== null) {
      elem.classList.add(className);
    }
  };

  var removeClass = function (selector, className) {
    var elem = document.querySelector(selector);
    if (elem !== null) {
      elem.classList.remove(className);
    }
  };

  var createWizards = function (count) {
    var NAMES = [
      'Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'
    ];

    var SURNAMES = [
      'да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'
    ];

    var COATS_COLORS = [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'
    ];

    var EYES_COLORS = [
      'black',
      'red',
      'blue',
      'yellow',
      'green'
    ];

    var wizards = [];
    for (var i = 0; i < count; i++) {
      wizards.push({
        'name': NAMES[getRandomInt(NAMES.length - 1)] + ' ' + SURNAMES[getRandomInt(SURNAMES.length - 1)],
        'coatColor': COATS_COLORS[getRandomInt(COATS_COLORS.length - 1)],
        'eyesColor': EYES_COLORS[getRandomInt(EYES_COLORS.length - 1)]
      });
    }

    return wizards;
  };

  var fillingWizards = function (wizards) {
    var listElem = document.querySelector('.setup-similar-list');
    var templateElem = document.querySelector('#similar-wizard-template');

    for (var i = 0; i < wizards.length; i++) {
      var itemElem = templateElem.content.cloneNode(true);

      renderWizard(itemElem, wizards[i]);

      listElem.appendChild(itemElem);
    }
  };

  var renderWizard = function (itemElem, wizard) {
    var labelElem = itemElem.querySelector('.setup-similar-label');
    labelElem.textContent = wizard.name;

    var coatElem = itemElem.querySelector('.wizard-coat');
    coatElem.setAttribute('style', 'fill: ' + wizard.coatColor);

    var eyesElem = itemElem.querySelector('.wizard-eyes');
    eyesElem.setAttribute('style', 'fill: ' + wizard.eyesColor);
  };

  var wizards = createWizards(4);
  fillingWizards(wizards);

  var setupOpenElem = document.querySelector('.setup-open');
  var setupCloseElem = document.querySelector('.setup-close');

  var escKeydownHandler = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      popupSetupHidden();
    }
  };

  var popupSetupShow = function () {
    document.addEventListener('keydown', escKeydownHandler);

    removeClass('.setup', 'hidden');
    removeClass('.setup-similar', 'hidden');
  };

  var popupSetupHidden = function () {
    var activeElem = document.activeElement;
    if (activeElem && activeElem.classList.contains('setup-user-name')) {
      return;
    }

    document.removeEventListener('keydown', escKeydownHandler);

    addClass('.setup', 'hidden');
    addClass('.setup-similar', 'hidden');
  };

  setupOpenElem.addEventListener('click', function () {
    popupSetupShow();
  });

  setupCloseElem.addEventListener('click', function () {
    popupSetupHidden();
  });

  setupOpenElem.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      popupSetupShow();
    }
  });

  setupCloseElem.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      popupSetupHidden();
    }
  });

})();
