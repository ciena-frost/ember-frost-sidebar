import Ember from 'ember'
const {
  Controller
} = Ember

export default Controller.extend({
  sentences: ['I\'m loooooooooooooggggg content'],
  isOpen1: false,
  isOpen2: false,
  actions: {
    onToggle1 () {
      this.toggleProperty('isOpen1')
    },
    onToggle2 () {
      this.toggleProperty('isOpen2')
    }
  }
})
