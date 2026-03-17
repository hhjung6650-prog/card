(function () {
  'use strict';

  const card = document.querySelector('.card');
  const character = document.querySelector('.character');

  // 카드 기울기 효과 (마우스 따라가기)
  if (card) {
    card.addEventListener('mousemove', function (e) {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const tiltX = y * -8;
      const tiltY = x * 8;
      card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });

    card.addEventListener('mouseleave', function () {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0)';
    });
  }

  // 캐릭터 눈동자 살짝 움직임 (선택)
  if (character) {
    var eyes = document.querySelectorAll('.eye');
    document.addEventListener('mousemove', function (e) {
      var rect = character.getBoundingClientRect();
      var cx = rect.left + rect.width / 2;
      var cy = rect.top + rect.height / 2;
      var dx = Math.max(-2, Math.min(2, (e.clientX - cx) / 80));
      var dy = Math.max(-2, Math.min(2, (e.clientY - cy) / 80));
      eyes.forEach(function (eye) {
        eye.style.transform = 'translate(' + dx + 'px, ' + dy + 'px)';
      });
    });
  }
})();
