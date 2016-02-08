# Metalsmith-Inline-Source
A [Metalsmith](https://github.com/metalsmith/metalsmith) plugin tied with [inline-source](https://github.com/popeindustries/inline-source) to inline static assets like SVG, Javascript and CSS.

##Installation
```bash
$ npm install metalsmith-inline-source
```

##Usage
###Javascript
Pass the inline-source plugin into Metalsmith via the `use` method:
```js
var inlineSource = require('metalsmith-inline-source');

metalsmith.use(inlineSource());
```

##Credit
The inline-source plugin can be found [here](https://github.com/popeindustries/inline-source); this is simply a wrapper for Metalsmith.
