# egg-oauth2-plus

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-oauth2-plus.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-oauth2-plus
[travis-image]: https://img.shields.io/travis/eggjs/egg-oauth2-plus.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-oauth2-plus
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-oauth2-plus.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-oauth2-plus?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-oauth2-plus.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-oauth2-plus
[snyk-image]: https://snyk.io/test/npm/egg-oauth2-plus/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-oauth2-plus
[download-image]: https://img.shields.io/npm/dm/egg-oauth2-plus.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-oauth2-plus

<!--
Description here.
-->

## Install

```bash
$ npm i egg-oauth2-plus --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.oauth2Plus = {
  enable: true,
  package: 'egg-oauth2-plus',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.oauth2Plus = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
