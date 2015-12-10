ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _){

	List.Controller = {
		listContacts: function(){
			var contacts = ContactManager.request('contact:entities');

			var contactView = new List.Contacts({
				collection: contacts
			})
			contactView.on('childview:contact:delete', function(childView, model){
				contacts.remove(model);
			})
			ContactManager.mainRegion.show(contactView)
		}
	}

})