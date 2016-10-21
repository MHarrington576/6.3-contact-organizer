window.$ = window.jQuery = require('jquery');
require('bootstrap-sass/assets/javascripts/bootstrap');
var Backbone = require('backbone');
var contactTemplate = require('../templates/templates.hbs');

// console.log(contactTemplate);

var ContactListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'contact-list-view list-group',
  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderNewContact);
  },
  render: function(){
    return this;
  },
  renderNewContact: function(contact){
    var newContact = new IndividualContactView({model: contact});
    this.$el.append(newContact.render().el);
  }
});

var IndividualContactView = Backbone.View.extend({
  tagName: 'li',
  className: 'listed-contact list-group-item',
  template: contactTemplate,
  initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove);
    // this.ListenTo(this.model, 'changed', this.append);
  },
  render: function(){
    var context = this.model.toJSON();
    var renderedTemplate = this.template(context);
    this.$el.html(renderedTemplate);
    return this;
  }
});

var CreateContactFormView = Backbone.View.extend({
  events: {
    'submit': 'addContact'
  },

  addContact: function(e){
    e.preventDefault();
    var firstName = $('#first-name-entry').val();
    var lastName = $('#last-name-entry').val();
    var company = $('#company-entry').val();
    var phoneNumber = $('#phone-number-entry').val();
    var email = $('#email-entry').val();
    var birthday = $('#birthday-entry').val();

    this.collection.create({firstName: firstName, lastName: lastName,
      company: company, phoneNumber: phoneNumber, email: email, birthday: birthday});
    $('.new-contact-form').trigger('reset');
  }
});

module.exports = {
  ContactListView: ContactListView,
  IndividualContactView: IndividualContactView,
  CreateContactFormView: CreateContactFormView
};
