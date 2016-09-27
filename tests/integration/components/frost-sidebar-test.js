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

      return capture('sidebar-closed', done, {
        targetElement: $hook('sidebar')[0],
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

      return capture('sidebar-opened', done, {
        targetElement: $hook('sidebar')[0],
        experimentalSvgs: true
      })
    })
  }
)
