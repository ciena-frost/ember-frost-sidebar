import Ember from 'ember'
import config from './config/environment'

var Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function () {
  this.route('demo', { path: '/' }, function () {
    this.route('overview', { path: '/' })
    this.route('content')
    this.route('size')
    this.route('dynamic-updates')
  })
})

export default Router
