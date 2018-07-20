# 8.1.1 (2018-07-20)

* **Fixed** Travis API key.


# 8.1.0 (2018-04-19)

* Added `label` prop

# 8.0.0 (2018-04-13)

* Upgraded `ember-frost-core` to ^8.0.0
* Installed `ember-cli-svgstore`
* Updated `frost-icon` functionality to work with new version of `ember-frost-core`

# 7.0.0 (2018-03-23)
* **Updated** pull request template
* **Added** issue template
* **Updated** to `pr-bumper` version `3`
* **Updated** to node 8
* **Added** slack integration
* **Updated** `ember-frost-test` to `^4.0.1`
* **Updated** `ember-test-utils` to `^8.1.1`
* **Updated** `ember-cli-frost-blueprints` to `^5.0.2`
* **Updated** `ember-prop-types` to `^7.0.1`
* **Updated** `ember-frost-core` to `^7.0.0`
* **Removed** ignoring of `package-lock.json` file
* **Added** `package-lock.json` file
* **Updated** Travis CI scripts to allow non-exact node version

# 6.0.0 (2018-01-31)
* **Added** ignore the linting of the `CHANGELOG.md`
* **Added** ignoring of `package-lock` until we are ready to move to node 8
* **Added** ignoring of `.DS_Store` file
* **Removed** useLintTree ember-cli-mocha configuration from `ember-cli-build.js`
* **Added** `ember-frost-test`@ `^4.0.0`
* **Added** `chai-jquery` @ `^2.0.0`
* **Added** `ember-cli-chai` @ `0.4.3`
* **Updated** `ember-cli-mocha` to `0.14.4`
* **Updated** `ember-sinon` to `^0.7.0`
* **Updated** `ember-test-utils` to `^8.1.0`
* **Added** `sinon-chai` @ `^2.14.0`
* **Removed** `.template-lintrc.js` file since this config is now being provided by `ember-test-utils`
* **Removed** blueprint installation of packages since they are now being provided as dependencies of this add-on
* **Updated** `ember-cli-code-coverage` to `0.3.12`
* **Updated** `ember-cli-frost-blueprints` to `^5.0.1`
* **Updated** `ember-cli-htmlbars-inline-precompile` to `0.3.12`
* **Updated** pin `ember-code-snippet` to `1.7.0`
* **Updated** `ember-browserify` to `^1.2.0`
* **Removed** unused `ember-cli-notifications` package
* **Updated** `ember-concurrency` to `0.7.19`
* **Removed** unused `ember-computed-decorators`package
* **Removed** unused `ember-elsewhere` package
* **Updated** `ember-hook` to `1.4.2` and moved to a dependency instead of a devDependency
* **Removed** unused `ember-lodash-shim` package
* **Updated** `ember-prop-types` to `^6.0.1` and moved to a dependency instead of a devDependency
* **Removed** unused `ember-redux` package
* **Removed** unused `ember-spread` package
* **Removed** unused `ember-truth-helpers` package
* **Removed** unused `fixpack` package
* **Removed** unused `lodash-es` package
* **Removed** unused `redux` package
* **Removed** unused `redux-thunk` package
* **Updated** `ember-cli-sass` to `7.1.1`
* **Updated** `ember-frost-core` to `^5.1.1`
* **Updated** `liquid-fire` to `0.27.2`
* **Updated** add json-summary reporter to code coverage config
* **Removed** babel es7.decorators config from `ember-cli-build.js` since `ember-computed-decorators` is no longer installed
* **Removed** unused `ember-inflector` bower package
* **Removed** unused `lodash` bower package
* **Removed** unused `jquery` bower package
* **Removed** unused `es6-promise` bower package
* **Removed** unused `resemblejs` bower package
* **Updated** `Faker` and `pretender` bower packages to be devDependencies



# 5.0.1 (2017-11-17)
* #28 - Bind context to call of this._super.included() in index.js

# 5.0.0 (2017-11-08)
* Use the latest `ember-frost-core`, with a flexible minor version (`^3.0.1`)


# 4.0.4 (2017-08-11)
* Upgrade ember-cli 2.12.3 inter-dependencies

# 4.0.3 (2017-08-07)
* **Updated** Ember CLI version from `2.8.x` to `2.12.3`
* **Updated** Ember version from `2.8.x` to `2.12.x`
* **Updated** ember-try config for LTS-2.8 and LTS-2-12
* **Updated** travis CI build matrix for LTS-2.8 and default (2.12.x)
* **Updated** `liquid-fire` version to the Ember 2.12.x compatible version
* **Updated** `ember-frost-core` version to the Ember 2.12.x compatible version

# 4.0.2 (2017-08-04)
* **Added** `pr-bumper.json` configuration file
* **Updated** `pr-bumper` to version 2
* **Updated** `PULL_REQUEST_TEMPLATE` to add new `#none#` support
* **Updated** travis CI build and publish scripts
* **Updated** secure auth tokens
* **Updated** `ember-test-utils` to version 4
* **Updated** linting errors
* **Updated** test to remove use of deprecated `describeComponent()`
* **Removed** usage of `ember-cli-visual-acceptance`
* **Removed** `testem.json` in favor of `testem.js`

# 4.0.1 (2017-04-21)
* **Added** blueprint check

# 4.0.0
* **Updated** `ember-frost-core` to `^1.0.0`

# 3.1.0
* Add icons

# 3.0.1
Fix for code coverage issues with v>=0.3.6


# 3.0.0
**Updated** minimum node version to 6



# 2.0.0
- Update dependencies


# 1.2.2
 - Modified environment.js to have correct rootURL, and locationType


# 1.2.1
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

# 1.2.0
No CHANGELOG section found in Pull Request description.
Use a `# CHANGELOG` section in your Pull Request description to auto-populate the `CHANGELOG.md`

