import Ember from 'ember'
const { Component } = Ember
import layout from '../templates/components/frost-sidebar'
import PropTypesMixin, { PropTypes } from 'ember-prop-types'

// TODO: horizontal and vertical scroll should be able to work together.
export default Component.extend(PropTypesMixin, {
  // == Component properties ==================================================
  layout: layout,
  classNames: ['frost-sidebar'],

  // == State properties ======================================================
  propTypes: {
    // Options
    isOpen: PropTypes.bool,
    hook: PropTypes.string,
    content: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.EmberObject
    ]).isRequired,

    // Actions
    onToggle: PropTypes.func,
    onClose: PropTypes.func,
    onOpen: PropTypes.func
  },

  getDefaultProps () {
    return {
      isOpen: false
    }
  },

  // == Events ================================================================
  _onOpen () {
    const onOpen = this.get('onOpen')
    if (onOpen) {
      onOpen()
    }
  },
  _onClose () {
    const onClose = this.get('onClose')
    if (onClose) {
      onClose()
    }
  },

  // == Actions ===============================================================
  actions: {
    _onToggle () {
      if (this.get('isOpen')) {
        this._onClose()
      } else {
        this._onOpen()
      }

      this.toggleProperty('isOpen')
      const onToggle = this.get('onToggle')
      if (onToggle) {
        onToggle()
      }
    }
  }
})
