import Ember from 'ember'
import layout from '../templates/components/frost-sidebar'

export default Ember.Component.extend({
  layout: layout,
  hookName: 'frost-sidebar',
  classNames: ['frost-sidebar'],
  isOpen: false,

  actions: {
    toggleSidebar () {
      this.toggleProperty('isOpen')
    }
  }
})
