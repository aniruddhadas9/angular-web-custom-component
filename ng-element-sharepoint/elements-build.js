const concat = require('concat');

(async function build() {
  const files = [
    './dist/sharepointNgElement/runtime.js',
    './dist/sharepointNgElement/polyfills.js',
    './dist/sharepointNgElement/scripts.js',
    './dist/sharepointNgElement/main.js'
  ];
  await concat(files, './dist/sharepointNgElement/bundle.js');
})();
