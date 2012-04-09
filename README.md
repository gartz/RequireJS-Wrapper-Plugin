# RequireJS-Wrapper-Plugin

This plugin for [RequireJS](http://requirejs.org) will give support to load javascript files that 
doesn't have support to AMD pattern, but declare some global var.

This plugin support RequireJS Optimizer.

Some libs that this plugin will help you:

* Underscore: http://documentcloud.github.com/underscore/
* Backbone: http://documentcloud.github.com/backbone/
* Zepto: http://zeptojs.com/

## Configuration

It's very simple to configure:

* wrapper
 * globals
 * deps

### globals config collection

In globals you must declare your include path as key and the generated global as value.

Exemple for `underscore`:

```js
wrapper: {
  globals: {
    'lib/underscore': '_'
  }
}
```

Or you can use a function to get the return like:

```js
wrapper: {
  globals: {
    'lib/underscore': function() { return window._.noConflict(); }
  }
}
```

### dependence config collection

Some libs can have dependencies, like `Backbone`, so this feature is to solve this problem very simple.
Because you are working with libs that don't support AMD pattern, you will need to setup their depences in the
config file.

Exemple for `Backbone`:

```js
wrapper: {
  globals: {
    'lib/underscore': '_',
    'lib/backbone': 'Backbone'
  },
  deps: {
    'lib/backbone': ['lib/underscore']
  }
}
```

## Using the require feature

It's very simple, you just need to require your target with plugin wrap, example:

```js
define(['wrap!underscore'], function( _ ) {
  console.debug(_); // returns underscore content
});
```

## Writing your own plugins

Check [RequireJS documentation](http://requirejs.org/docs/plugins.html) for
a basic reference and use other plugins as reference. RequireJS official
plugins are a good source for learning.

Also be sure to check [RequireJS Wiki](https://github.com/jrburke/requirejs/wiki/Plugins).



## Author

[Gabriel Reitz Giannattasio (Gartz)](http://gartz.com.br/)



## License

All the plugins are released under the MIT license.



