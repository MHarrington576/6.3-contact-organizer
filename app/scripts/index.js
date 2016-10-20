var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models');
var views = require('./views');

$(function(){
  var contactCollection = new models.ContactCollection;

  var contactForm = new views.CreateContactFormView({collection: contactCollection});
  contactForm.setElement($('.new-contact-form')[0]);

  var contactListVariable = new views.ContactListView({collection: contactCollection});
  $('.app').append(contactListVariable.render().el);

  contactCollection.fetch();
});
