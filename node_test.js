var ffi = require('ffi');

var lib = ffi.Library('target/release/librustffi', {
  'process': ['void', []]
});

lib.process();

console.log("done!");
