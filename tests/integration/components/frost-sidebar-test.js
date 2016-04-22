/* jshint expr:true */
import Ember from 'ember';
import { expect, assert } from 'chai';
import {
	describeComponent,
	it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
	'frost-sidebar',
	'Integration: FrostSidebarComponent',
	{
		integration: true
	},
	function () {
		it('renders', function () {
			// Set any properties with this.set('myProperty', 'value');
			// Handle any actions with this.on('myAction', function(val) { ... });
			// Template block usage:
			// this.render(hbs`
			//   {{#frost-sidebar}}
			//     template content
			//   {{/frost-sidebar}}
			// `);

			this.render(hbs`
				{{#frost-sidebar class="demo-instance"}}
					<div class="demo-pod-content">
						demo
					</div>
				{{/frost-sidebar}}

			}`);
			expect(this.$()).to.have.length(1);
		});
		it('renders and can open sidebar', function () {
			this.render(hbs`
				{{#frost-sidebar class="demo-instance"}}
					<div class="demo-pod-content">
						demo
					</div>
				{{/frost-sidebar}}
			}`);
			assert.lengthOf($('.demo-pod-content'),0);
			Ember.run(()=>$('.closed-container svg').click());
			assert.lengthOf($('.demo-pod-content'),1);
			expect(this.$('.open-container')).to.have.length(1);
		});
	}
);