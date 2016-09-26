import Ember from 'ember'
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'frost-sidebar',
  'Integration: FrostSidebarComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      this.render(hbs`
        {{#frost-sidebar class="demo-instance"}}
          <div class="demo-pod-content">
            demo
          </div>
        {{/frost-sidebar}}`)
      expect(this.$()).to.have.length(1)
    })

    it('renders and can open sidebar', function () {
      this.render(hbs`
        {{#frost-sidebar class="demo-instance"}}
          <div class="demo-pod-content">
            demo
          </div>
        {{/frost-sidebar}}`)
      expect(this.$('.demo-pod-content')).to.have.length(0)
      Ember.run(() => this.$('.closed-container svg').click())
      expect(this.$('.demo-pod-content')).to.have.length(1)
      expect(this.$('.open-container')).to.have.length(1)
    })
  }
)
