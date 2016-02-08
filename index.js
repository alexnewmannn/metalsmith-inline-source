'use strict';

var _ = require('lodash');
var inlineSource = require('inline-source');

/*
 * Iterate through each file name and grab
 * the contents of each file and replace
 * with an inlined version.
 */

 //TODO - pass in optinos
var inline = function() {
  return function(files, metalsmith, done) {
    var keys = _.keys(files);
    _.each(keys, function(key) {
      var file = files[key];
      inlineSource(file.contents, {
        compress: true
      }, function(err, html) {
        if (err) {
          console.log(err);
        }
        file.contents = html;
      });
    });

    done();
  };
};

module.exports = inline;
