'use strict';

var _ = require('lodash');
var inlineSource = require('inline-source').sync;

/*
 * Iterate through each file name and grab
 * the contents of each file and replace
 * with an inlined version.
 */

var inline = function(options) {
  return function(files, metalsmith, done) {
     _.forEach(files, function(file, path, files) {
      files[path].contents = inlineSource(files[path].contents, options);
    });

    done();
  };
};

module.exports = inline;
