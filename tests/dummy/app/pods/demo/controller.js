import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    tabSelected(tab) {
      this.set('selectedTab', tab);
    }
  },

  //frost-doc stuff
  general: {
    alias: 'general',
    template: `
      {{#frost-sidebar class="demo-instance"}}
            Test content
        {{#frost-checkbox-array id="basic" }}
          {{#frost-checkbox id="basic_value-A" value="A" }}A{{/frost-checkbox}}
        {{/frost-checkbox-array}}
      {{/frost-sidebar}}
      `
  }
});