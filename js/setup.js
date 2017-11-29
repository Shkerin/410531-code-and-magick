'use strict';

(function () {
  var randomInt = function (max) {
    var rand = Math.random() * (max + 1);
    rand = Math.floor(rand);
    return rand;
  };

  var removeClass = function (selector, className) {
    var el = document.querySelector(selector);
    el.classList.remove(className);
  };

  removeClass('.setup', 'hidden');
  removeClass('.setup-similar', 'hidden');

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

  var wizardArray = [];
  for (var i = 0; i < 4; i++) {
    wizardArray.push({
      'name': NAMES[randomInt(NAMES.length - 1)] + ' ' + SURNAMES[randomInt(SURNAMES.length - 1)],
      'coatColor': COATS_COLORS[randomInt(COATS_COLORS.length - 1)],
      'eyesColor': EYES_COLORS[randomInt(EYES_COLORS.length - 1)]
    });
  }

  var renderWizard = function (wizard) {
    var similarLabelElem = similarItemElem.querySelector('.setup-similar-label');
    similarLabelElem.textContent = wizard.name;

    var wizardCoatElem = similarItemElem.querySelector('.wizard-coat');
    wizardCoatElem.setAttribute('style', 'fill: ' + wizard.coatColor);

    var eyesColorElem = similarItemElem.querySelector('.wizard-eyes');
    eyesColorElem.setAttribute('style', 'fill: ' + wizard.eyesColor);
  };

  var similarListElem = document.querySelector('.setup-similar-list');
  var wizardTemplateElem = document.querySelector('#similar-wizard-template');

  for (i = 0; i < wizardArray.length; i++) {
    var similarItemElem = wizardTemplateElem.content.cloneNode(true);

    renderWizard(wizardArray[i]);

    similarListElem.appendChild(similarItemElem);
  }

})();
