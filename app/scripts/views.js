window.$ = window.jQuery = require('jquery');
require('bootstrap-sass/assets/javascripts/bootstrap');
var Backbone = require('backbone');

var ContactListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'contact-list col-md-9 list-group',
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
  initialize: function(){
    this.ListenTo(this.model, 'destroy', this.remove);
    this.ListenTo(this.model, 'changed', this.append);
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
    var newContactFirstName = $('#first-name-entry').val();
    this.collection.create({firstName: newContactFirstName});

    $('#first-name-entry').val('');
  }
});

module.exports = {
  ContactListView: ContactListView,
  IndividualContactView: IndividualContactView,
  CreateContactFormView: CreateContactFormView
}
