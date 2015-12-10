ContactManager.module('Entities', function(Entities, ContactManager, Backbone, Marionette, $, _){
	Entities.Contact = Backbone.Model.extend({})

	Entities.ContactCollection = Backbone.Collection.extend({
		model: Entities.Contact,

		comparator: function(contact){
			return contact.get('firstName') + " " + contact.get('lastName');
		}
	});

	var contacts;

	var initializeContacts = function() {
		contacts = new Entities.ContactCollection([

		{
			id: 1,
			firstName: 'Bob',
			lastName: 'Bobovich',
			phoneNumber: '999-bob-888'
		},
		{
			id: 2,
			firstName: 'Alice',
			lastName: 'hmm',
			phoneNumber: '999-bob-888'
		},
		{
			id: 3,
			firstName: 'Nick',
			lastName: 'Nope',
			phoneNumber: '999-bob-888'
		}

		])
	}

	var API = {
		getContactEntities: function(){
			if(contacts === undefined){
				initializeContacts()
			}

			return contacts
		}
	}

	ContactManager.reqres.setHandler('contact:entities', function(){
		return API.getContactEntities();
	})
});