[ci-img]: https://img.shields.io/travis/ciena-frost/ember-frost-sidebar.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-sidebar

[cov-img]: https://img.shields.io/coveralls/ciena-frost/ember-frost-sidebar.svg "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-sidebar

[npm-img]: https://img.shields.io/npm/v/ember-frost-sidebar.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-sidebar

[ember-observer-badge]: http://emberobserver.com/badges/ember-frost-sidebar.svg "Ember Observer score"
[ember-observer-badge-url]: http://emberobserver.com/addons/ember-frost-sidebar

[ember-img]: https://img.shields.io/badge/ember-1.12.2+-orange.svg "Ember 1.12.2+"

[bithound-img]: https://www.bithound.io/github/ciena-frost/ember-frost-sidebar/badges/score.svg "bitHound"
[bithound-url]: https://www.bithound.io/github/ciena-frost/ember-frost-sidebar

# ember-frost-sidebar
###### Dependencies

![Ember][ember-img]
[![NPM][npm-img]][npm-url]

###### Health

[![Travis][ci-img]][ci-url]
[![Coveralls][cov-img]][cov-url]

###### Security

[![bitHound][bithound-img]][bithound-url]

###### Ember Observer score
[![EmberObserver][ember-observer-badge]][ember-observer-badge-url]

## Installation
```
ember install ember-frost-sidebar
```

## API and Examples
Detailed API and example usage can be found in the sample application in `tests/dummy`, which is also running at http://ciena-frost.github.io/ember-frost-sidebar

## Testing with ember-hook
This addon has been optimized for use with [ember-hook](https://github.com/Ticketfly/ember-hook). You can set a `hook`
name on your sidebar template.
This will allow you to access the internal sidebar content for testing.
### Available hooks
* Sidebar - `<hook-name>-sidebar`
* Sidebar content - `<hook-name>-sidebar-content`
* Sidebar button - `<hook-name>-sidebar-button`

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
