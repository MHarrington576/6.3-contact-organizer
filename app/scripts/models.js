var $ = require('jquery');
var Backbone = require('backbone');

var Contact = Backbone.Model.extend({
  defaults: {
    visible: true
  }
});

var ContactCollection = Backbone.Collection.extend({
  model: Contact,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/mharringtoncontacts'
});

module.exports = {
  Contact: Contact,
  ContactCollection: ContactCollection
};
