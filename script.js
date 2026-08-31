document.querySelectorAll('.compare').forEach(function (block) {
  var range = block.querySelector('input[type="range"]');
  var after = block.querySelector('.img-after');
  var handle = block.querySelector('.compare-handle');

  function update(value) {
    after.style.clipPath = 'inset(0 0 0 ' + value + '%)';
    handle.style.left = value + '%';
  }

  range.addEventListener('input', function () {
    update(range.value);
  });

  update(range.value);
});
