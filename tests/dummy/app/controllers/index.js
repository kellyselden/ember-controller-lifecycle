import Ember from 'ember';

export default Ember.Controller.extend({
  bar: Ember.inject.service(),

  setupController(model) {
    this.setProperties(model);
  },
  resetController(isExiting) {
    if (isExiting) {
      this.set('bar.foo', 'bar');
    }
  }
});
