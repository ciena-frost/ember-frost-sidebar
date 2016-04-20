import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
	layout: layout,
	classNames: ['frost-sidebar'],
	isOpen: false,

	actions: {
		toggleSidebar() {
			this.toggleProperty("isOpen");
		}

	}
});