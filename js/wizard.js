'use strict';

(function () {
  window.renderWizards = function (count) {
    var createWizards = function (countWizards) {
      var NAMES = [
        'Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'
      ];

      var SURNAMES = [
        'да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'
      ];

      var wizards = [];
      for (var i = 0; i < countWizards; i++) {
        var coatsColors = window.const.COATS_COLORS;
        var eyesColors = window.const.EYES_COLORS;
        wizards.push({
          'name': NAMES[window.utils.getRandomInt(NAMES.length - 1)] + ' ' +
          SURNAMES[window.utils.getRandomInt(SURNAMES.length - 1)],
          'coatColor': coatsColors[window.utils.getRandomInt(coatsColors.length - 1)],
          'eyesColor': eyesColors[window.utils.getRandomInt(eyesColors.length - 1)]
        });
      }

      return wizards;
    };

    var fillWizard = function (itemElem, wizard) {
      var labelElem = itemElem.querySelector('.setup-similar-label');
      labelElem.textContent = wizard.name;

      var coatElem = itemElem.querySelector('.wizard-coat');
      coatElem.style = 'fill: ' + wizard.coatColor;

      var eyesElem = itemElem.querySelector('.wizard-eyes');
      eyesElem.style = 'fill: ' + wizard.eyesColor;
    };

    var listElem = document.querySelector('.setup-similar-list');
    var templateElem = document.querySelector('#similar-wizard-template');

    var wizards = createWizards(count);
    for (var i = 0; i < wizards.length; i++) {
      var itemElem = templateElem.content.cloneNode(true);

      fillWizard(itemElem, wizards[i]);

      listElem.appendChild(itemElem);
    }
  };
})();
