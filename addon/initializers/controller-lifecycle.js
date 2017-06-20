import Route from 'ember-route';

export function initialize() {
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
  name: 'controller-lifecycle',
  initialize
};
