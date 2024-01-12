'use strict';

const share = document.querySelector('.share-icon');
const float = document.querySelector('.floating-container');

share.addEventListener('click', function () {
  if (float.classList.contains('hidden')) {
    float.classList.remove('hidden');
  }
});
