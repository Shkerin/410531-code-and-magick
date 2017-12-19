'use strict';

/**
 * Модуль для вывода статистики игры.
 */

(function () {
  window.renderStatistics = function (ctx, names, times) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);

    ctx.fillStyle = 'white';
    ctx.fillRect(100, 10, 420, 270);

    ctx.fillStyle = 'black';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);

    var max = -1;
    for (var i = 0; i < times.length; i++) {
      if (times[i] > max) {
        max = times[i];
      }
    }

    var columnHeight = 150;
    var columnWidth = 40;
    var columnDistance = 80;
    var playerColor = 'rgba(255, 0, 0, 1)';
    var otherPlayersColor = 'rgba(0, 0, 255, 1)';
    var step = columnHeight / max;

    for (i = 0; i < names.length; i++) {
      ctx.fillStyle = 'black';
      ctx.fillText(times[i].toFixed(0), 140 + columnDistance * i, 230 - times[i] * step);
      ctx.fillText(names[i], 140 + columnDistance * i, 260);

      otherPlayersColor = 'rgba(0, 0, 255, ' + Math.random() + ')';
      ctx.fillStyle = (names[i] === 'Вы') ? playerColor : otherPlayersColor;
      ctx.fillRect((140 + i * columnDistance), (240 - times[i] * step), columnWidth, times[i] * step);
    }
  };
})();
