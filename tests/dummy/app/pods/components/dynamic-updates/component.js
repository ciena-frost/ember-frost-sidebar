import Ember from 'ember'
const {
  A,
  Component,
  Object: EmberObject
} = Ember
import {
  task,
  timeout
} from 'ember-concurrency'
import layout from './template';

export default Component.extend({
  layout,
  incrementors: A([]),

  speedTask: task(function * () {
    const incrementors = this.get('incrementors')

    while (incrementors.length < 30) {
      if (incrementors.length === 0 ||
          incrementors[incrementors.length - 1].value > 30) {
        incrementors.addObject(EmberObject.create({value: 0}))
      }

      for (let i = 0; i < incrementors.length; i++) {
        const incrementor = incrementors.objectAt(i)
        incrementor.set('value', incrementor.get('value') + 1)
      }

      yield timeout(30 - incrementors.length)
    }

    incrementors.addObject(EmberObject.create({
      value: '"...the need for speed!"'
    }))
  }).drop(),

  actions: {
    stopSpeeding () {
      this.get('speedTask').cancelAll()
      this.get('incrementors').clear()
    },

    startSpeeding () {
      this.get('speedTask').perform()
    }
  }
})
