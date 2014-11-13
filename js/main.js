'use strict';

var lib = require('./lib');

window.addEventListener('load', function() {
  document.querySelector('#mydiv').innerHTML = lib.example_func();
});
