import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createOrLogin: function() {
      this.transitionTo('create-or-login');
    }
  }
});