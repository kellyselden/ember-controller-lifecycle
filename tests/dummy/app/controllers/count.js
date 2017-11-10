import Controller from '@ember/controller';

export default Controller.extend({
  count: 0,

  setup() {
    this.incrementProperty('count');
  }
});
