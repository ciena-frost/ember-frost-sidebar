import Ember from 'ember'
const {
  Controller
} = Ember

export default Controller.extend({
  sentences: ['I\'m loooooooooooooggggg content'],
  isOpen: false,
  actions: {
    toggle () {
      this.toggleProperty('isOpen')
    }
  }
})
