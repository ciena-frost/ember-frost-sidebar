import Ember from 'ember'
const { Component } = Ember
import layout from '../templates/components/frost-sidebar'
import PropTypesMixin, { PropTypes } from 'ember-prop-types'

export default Component.extend(PropTypesMixin, {
  // == Component properties ==================================================
  layout: layout,
  classNames: ['frost-sidebar'],

  // == State properties ======================================================
  propTypes: {
    // Options
    content: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.EmberObject
    ]),
    isOpen: PropTypes.bool,

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
  hookName: 'frost-sidebar',

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
