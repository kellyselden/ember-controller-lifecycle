import Ember from 'ember';

export default Ember.Controller.extend({
  bar: Ember.inject.service(),

  setupController(model) {
    this.setProperties(model);
  },
  deactivate() {
    this.set('bar.foo', 'bar');
  }
});
