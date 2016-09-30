import Ember from 'ember'
const {
  Controller
} = Ember

// BEGIN-SNIPPET content-controller
export default Controller.extend({
  sentences: ['I\'m content'],
  isOpen: false,
  actions: {
    toggle () {
      this.toggleProperty('isOpen')
    }
  }
})
// END-SNIPPET
