'use strict';

var inlineSource = require('inline-source').sync;

/*
 * Filter files to find HTML files.
 * Iterate through each file name and grab
 * the contents of each file and replace
 * with an inlined version.
 */

var inline = function(options) {
  return function(files, metalsmith, done) {
      var htmlFiles = Object.keys(files).filter(function(file) {
        // Make sure the filename ends in either htm or html
        var checkIfHtml = /[.](?:html?)$/.test(file);

        if (checkIfHtml) {
          return file;
        }
      });

      htmlFiles.map(function(path) {
        files[path].contents = new Buffer(inlineSource(files[path].contents.toString(), options)), 'utf8';
      });
    done();
  };
};

module.exports = inline;
