var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models');
var views = require('./views');

$(function(){
  var contactCollection = new models.ContactCollection;

  var contactForm = new views.CreateContactFormView({collection: contactCollection});
  contactForm.setElement($('.new-contact-form')[0]);

  var contactList = new views.ContactListView({collection: contactCollection});
  $('.contact-list').append(contactList.render().el);

  contactCollection.fetch();
});
