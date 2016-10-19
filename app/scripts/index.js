var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models');
var views = require('./views');

$(function(){
  var contactCollectionVariable = new models.ContactCollection

  var contactFormVariable = new views.CreateContactFormView({collection: ContactCollection});
  contactFormVariable.setElement($('.new-contact-form')[0]);

  var contactListVariable = new views.ContactListView({collection: ContactCollection});
  $('.app').append(contactListVariable.render().el);
});
