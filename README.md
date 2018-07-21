![][header-image]

[![CircleCI][circleci-image]][circleci-url]
[![NPM version][npm-version]][npm-url]
[![NPM downloads][npm-downloads]][npm-url]
![License][license]
![Issues][issues]

`neutrino-middleware-jsxbin` is a Neutrino Middleware for the [JSXBin Webpack Plugin.][jsxbin-link]

## Get Started

```sh
npm install --save-dev neutrino-middleware-jsxbin
```

```js
module.exports = {
  use: [
    'neutrino-middleware-jsxbin'    
  ]
}
```

## Features

- Uses the [JSXBin Webpack Plugin][jsxbin-link] to package configured Webpack outputs into JSXBin files.
- Supports a `test` option to change the regex used to match output filenames.

[header-image]: https://raw.githubusercontent.com/sammarks/art/master/neutrino-middleware-jsxbin/header.jpg
[circleci-image]: https://img.shields.io/circleci/project/github/sammarks/neutrino-middleware-jsxbin.svg
[circleci-url]: https://circleci.com/gh/sammarks/neutrino-middleware-jsxbin/tree/master
[npm-version]: https://img.shields.io/npm/v/neutrino-middleware-jsxbin.svg
[npm-downloads]: https://img.shields.io/npm/dm/neutrino-middleware-jsxbin.svg
[npm-url]: https://www.npmjs.com/package/neutrino-middleware-jsxbin
[license]: https://img.shields.io/github/license/sammarks/neutrino-middleware-jsxbin.svg
[issues]: https://img.shields.io/github/issues/sammarks/neutrino-middleware-jsxbin.svg

[jsxbin-link]: https://github.com/sammarks/jsxbin-webpack-plugin
