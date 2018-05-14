import Route from '@ember/routing/route';

export function initialize(/* application */) {
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
}

export default {
  initialize
};
