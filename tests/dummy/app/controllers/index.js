import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  bar: service(),

  setup(model) {
    this.setProperties(model);
  },
  reset(isExiting, transition) {
    if (isExiting && transition.targetName === 'foo') {
      this.set('bar.foo', 'bar');
    }
  }
});
