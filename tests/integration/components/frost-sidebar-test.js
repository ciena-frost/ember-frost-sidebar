import {
  expect
} from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import { beforeEach } from 'mocha'
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
    beforeEach(function () {
      this.set('actions', {
        toggle () {
          this.set('isOpen', !this.get('isOpen'))
        }
      })
      this.setProperties({
        isOpen: false,
        sentences: ['test', 'test', 'test']
      })
    })

    it('renders closed sidebar', function (done) {
      this.render(hbs`
        {{frost-sidebar
          isOpen=isOpen
          onToggle=(action 'toggle')
          content=(component 'simple-content' sentences=sentences)
        }}`)

      expect($hook('-sidebar-content')).to.have.length(0)

      return capture('sidebar-closed', done, {
        targetElement: $hook('-sidebar')[0],
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
          onToggle=(action 'toggle')
          content=(component 'simple-content' sentences=sentences)
        }}`)

      expect($hook('-sidebar-content')).to.have.length(1)

      return capture('sidebar-opened', done, {
        targetElement: $hook('-sidebar')[0],
        experimentalSvgs: true
      })
    })

    it('toggle', function (done) {
      this.render(hbs`
        {{frost-sidebar
          isOpen=isOpen
          onToggle=(action 'toggle')
          content=(component 'simple-content' sentences=sentences)
        }}`)

      $hook('-sidebar-tab').click()

      expect($hook('-sidebar-content')).to.have.length(1)

      return capture('sidebar-toggle', done, {
        targetElement: $hook('-sidebar')[0],
        experimentalSvgs: true
      })
    })

    it('change hook', function () {
      this.render(hbs`
        {{frost-sidebar
          isOpen=isOpen
          onToggle=(action 'toggle')
          content=(component 'simple-content' sentences=sentences)
          hook='my-hook'
        }}`)

      expect($hook('my-hook-sidebar')).to.have.length(1)
    })
  }
)
