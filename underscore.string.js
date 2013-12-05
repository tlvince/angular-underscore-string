'use strict';

/**
 * Underscore.string
 *
 * Proxy filter for calling Underscore.string functions.
 *
 * Examples:
 *
 *     {{ name | _.str: 'swapCase' }}
 *     {{ separator | _.str: 'join': ['foo', 'bar'] }}
 *
 * @param {String} str String to filter
 * @param {String} fn Underscore.string function to call
 * @param {[params]} params Extra parameters to pass to Underscore.string
 * @return {String} Filtered string
 */
angular.module('underscore.string', [])
  .filter('_.str', function() {
    return function(str, fn, params) {
      str = str || '';
      params = params || [];
      params.unshift(str);
      return fn ? _.str[fn].apply(this, params) : str;
    };
  });
