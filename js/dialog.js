'use strict';

/**
 * Модуль для перетаскивания диалога редактирования персонажа
 * и предметов из магазина в рюкзак.
 */

(function () {
  var setup = document.querySelector('.setup');
  var dialog = document.querySelector('.upload'); // TODO заменить на класс '.setup-user-pic'
  var setupCloseElem = document.querySelector('.setup-close');
  var saveCoords;

  // Перетаскивание диалога
  dialog.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    if (!saveCoords) {
      saveCoords = {
        left: setup.offsetLeft,
        top: setup.offsetTop
      };
    }

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var mouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();
      moveEvt.stopPropagation();

      var shiftCoords = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.x,
        y: moveEvt.y
      };

      setup.style.left = (setup.offsetLeft - shiftCoords.x) + 'px';
      setup.style.top = (setup.offsetTop - shiftCoords.y) + 'px';
    };

    var mouseUpHandler = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);

    var setupCloseHandler = function (closeEvt) {
      closeEvt.preventDefault();

      setup.style.left = saveCoords.left + 'px';
      setup.style.top = saveCoords.top + 'px';
    };
    setupCloseElem.addEventListener('click', setupCloseHandler);
  });

  // Перетаскивание предметов
  var shopElem = document.querySelector('.setup-artifacts-shop');
  var artifactsElem = document.querySelector('.setup-artifacts');
  var draggedItem = null;
  var styleDropZone = '2px dashed red';

  shopElem.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
      artifactsElem.style.outline = styleDropZone;
    }
  });

  artifactsElem.addEventListener('dragenter', function (evt) {
    evt.preventDefault();
    evt.target.style.backgroundColor = 'yellow';
    artifactsElem.style.outline = styleDropZone;
  });

  artifactsElem.addEventListener('dragleave', function (evt) {
    evt.preventDefault();
    evt.target.style.backgroundColor = '';
  });

  artifactsElem.addEventListener('drop', function (evt) {
    evt.preventDefault();
    evt.target.style.backgroundColor = '';
    evt.target.appendChild(draggedItem);
    artifactsElem.style.outline = '';
  });

  artifactsElem.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });
})();
