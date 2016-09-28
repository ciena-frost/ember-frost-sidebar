import Ember from 'ember'
const {
  Controller
} = Ember

export default Controller.extend({
  sentences: [
    'Cooooooooooooooooooontennnnnnnnnnnnt',
    'More content',
    'More content again !',
    'What!',
    'Some content',
    'Again!'
  ],
  isOpen: false,
  actions: {
    toggle () {
      this.toggleProperty('isOpen')
    }
  }
})
