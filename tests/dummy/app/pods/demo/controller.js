import Ember from 'ember'

export default Ember.Controller.extend({
  actions: {
    tabSelected (tab) {
      this.set('selectedTab', tab)
    }
  }
})
