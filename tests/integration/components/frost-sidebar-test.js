import {expect} from 'chai'
import {$hook, initialize as initializeHook} from 'ember-hook'
import {integration} from 'ember-test-utils/test-support/setup-component-test'
import hbs from 'htmlbars-inline-precompile'
import {beforeEach, describe, it} from 'mocha'

const test = integration('frost-sidebar')
describe(test.label, function () {
  test.setup()

  beforeEach(function () {
    initializeHook()
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

  it('should render closed sidebar', function () {
    this.render(hbs`
      {{frost-sidebar
        isOpen=isOpen
        onToggle=(action 'toggle')
        content=(component 'simple-content' sentences=sentences)
      }}`)

    expect($hook('-sidebar-content')).to.have.length(0)
  })

  it('should render opened sidebar', function () {
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
  })

  it('should toggle', function () {
    this.render(hbs`
      {{frost-sidebar
        isOpen=isOpen
        onToggle=(action 'toggle')
        content=(component 'simple-content' sentences=sentences)
      }}`)

    $hook('-sidebar-button').click()

    expect($hook('-sidebar-content')).to.have.length(1)
  })

  it('should change hook', function () {
    this.render(hbs`
      {{frost-sidebar
        isOpen=isOpen
        onToggle=(action 'toggle')
        content=(component 'simple-content' sentences=sentences)
        hook='my-hook'
      }}`)

    expect($hook('my-hook-sidebar')).to.have.length(1)
  })
})
