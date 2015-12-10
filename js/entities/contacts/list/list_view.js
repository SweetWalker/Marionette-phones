ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _){

	List.Contact = Marionette.ItemView.extend({
		tagName: 'tr',
		template: '#contact-template',

		events: {
			'click': 'highlight',
			'click button.js-delete': 'deleteClick'
		},

		highlight: function(e){
			if(e.target.nodeName === 'BUTTON') return false;
			this.$el.toggleClass('warning');
		},

		deleteClick: function(){
			this.trigger('contact:delete', this.model)
		},

		remove: function(){
			var self = this;
			this.$el.fadeOut(function(){
				Marionette.ItemView.prototype.remove.call(self);
			});
		}

	});

	List.Contacts = Marionette.CompositeView.extend({
		tagName: 'table',
		className: 'table table-hover',
		template: '#contact-comp-template',
		childView: List.Contact,
		childViewContainer: 'tbody'
	})


})