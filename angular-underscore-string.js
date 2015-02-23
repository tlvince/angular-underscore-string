'use strict';

/**
 * Underscore.string
 *
 * Proxy filter for calling Underscore.string functions.
 *
 * Examples:
 *
 *     {{ name | s: 'swapCase' }}
 *     {{ separator | s: 'join': ['foo', 'bar'] }}
 *
 * @param {String} s String to filter
 * @param {String} fn Underscore.string function to call
 * @param {[params]} params Extra parameters to pass to Underscore.string
 * @return {String} Filtered string
 */
angular.module('underscore.string', [])
  .filter('s', function() {
    return function(str, fn, params) {
      str = str || '';
      params = params || [];
      params.unshift(str);
      return fn ? s[fn].apply(this, params) : str;
    };
  });
