import Ember from 'ember'
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import {
  $hook
} from 'ember-hook'

describeComponent(
  'frost-sidebar',
  'Integration: FrostSidebarComponent',
  {
    integration: true
  },
  function () {
    it('renders closed sidebar', function (done) {
      this.render(hbs`
        {{frost-sidebar
          content=(component 'simple-content' texts=test)
        }}`)
      expect($hook('frost-sidebar-close')).to.have.length(1)

      return capture('frost-sidebar-closed', done, {
        targetElement: $hook('frost-sidebar-close')[0],
        experimentalSvgs: true
      })
    })

    it('renders opened sidebar', function (done) {
      this.setProperties({
        isOpen: true
      })
      this.render(hbs`
        {{frost-sidebar
          isOpen=isOpen
          content=(component 'simple-content' text='test')
        }}`)

      return capture('frost-sidebar-opened', done, {
        targetElement: $hook('frost-sidebar-done')[0],
        experimentalSvgs: true
      })
    })
  }
)
