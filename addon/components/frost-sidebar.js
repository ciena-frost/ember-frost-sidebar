import Ember from 'ember'
const {Component} = Ember
import layout from '../templates/components/frost-sidebar'
import PropTypesMixin, {PropTypes} from 'ember-prop-types'

export default Component.extend(PropTypesMixin, {
  // == Component properties ==================================================
  layout: layout,
  classNames: ['frost-sidebar'],

  // == State properties ======================================================
  propTypes: {
    // Options
    isOpen: PropTypes.bool.isRequired,
    hook: PropTypes.string,
    content: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.EmberObject
    ]).isRequired,
    label: PropTypes.EmberComponent,

    // Actions
    onToggle: PropTypes.func.isRequired
  }
})
