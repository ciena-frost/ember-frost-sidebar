[ci-img]: https://img.shields.io/travis/ciena-frost/ember-frost-sidebar.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-sidebar

[cov-img]: https://img.shields.io/coveralls/ciena-frost/ember-frost-sidebar.svg "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-sidebar

[npm-img]: https://img.shields.io/npm/v/ember-frost-sidebar.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-sidebar

# ember-frost-sidebar <br /> [![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]


 * [Installation](#Installation)
 * [API](#API)
 * [Examples](#Examples)
 * [Contributing](#Contributing)

## Installation
```
ember install ember-frost-sidebar
```
## API
Not applicable at the moment.

## Examples
```
{{#frost-sidebar class="demo-instance"}}
  <div class="demo-pod-content">
    <h4>Test content</h4>
    {{frost-checkbox  checked=true label="Check me"}}
  </div>
{{/frost-sidebar}}
```

## Development
### Setup
```
git clone git@github.com:ciena-frost/ember-frost-sidebar.git
cd ember-frost-sidebar
npm install && bower install
```

### Development Server
A dummy application for development is available under `ember-frost-sidebar/tests/dummy`.
To run the server run `ember server` (or `npm start`) from the root of the repository and
visit the app at http://localhost:4200.

### Testing
Run `npm test` from the root of the project to run linting checks as well as execute the test suite
and output code coverage.
