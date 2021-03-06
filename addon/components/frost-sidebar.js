import Ember from 'ember'
const {Component, typeOf} = Ember
import layout from '../templates/components/frost-sidebar'
import computed, {readOnly} from 'ember-computed-decorators'
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
    label: PropTypes.oneOfType([
      PropTypes.EmberComponent,
      PropTypes.string
    ]),

    // Actions
    onToggle: PropTypes.func.isRequired
  },

  // == Computed Properties ===================================================

  @readOnly
  @computed('label')
  isLabelComponent (label) {
    return typeOf(label) !== 'string'
  }
})
