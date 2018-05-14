import Route from '@ember/routing/route';

Route.reopen({
  setupController(controller, ...args) {
    this._super(...arguments);

    if (controller.setup) {
      controller.setup(...args);
    }
  },
  resetController(controller, ...args) {
    this._super(...arguments);

    if (controller.reset) {
      controller.reset(...args);
    }
  }
});

export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');
}

export default {
  initialize
};
