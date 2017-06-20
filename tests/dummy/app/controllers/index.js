import Ember from 'ember';

export default Ember.Controller.extend({
  bar: Ember.inject.service(),

  setup(model) {
    this.setProperties(model);
  },
  reset(isExiting, transition) {
    if (isExiting && transition.targetName === 'foo') {
      this.set('bar.foo', 'bar');
    }
  }
});
