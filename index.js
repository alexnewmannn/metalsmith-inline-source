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
      files[path].contents = new Buffer(inlineSource(files[path].contents.toString(), options)), 'utf8';
    });

    done();
  };
};

module.exports = inline;
