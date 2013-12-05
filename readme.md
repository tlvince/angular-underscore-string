# angular-underscore-string

> Underscore.string as Angular filters

Assumes Underscore.string has been added to the global scope.

Examples:

```html
{{ name | _.str: 'swapCase' }}
{{ separator | _.str: 'join': ['foo', 'bar'] }}
```

## Install

```bash
bower install angular-underscore-string
```

## Usage

Add `underscore.string` as a module dependency, e.g.:

```js
angular.module('App', ['underscore.string']);
```

## Author

© 2013 Tom Vincent <http://tlvince.com/contact>

## License

Released under the [MIT License](http://tlvince.mit-license.org).
