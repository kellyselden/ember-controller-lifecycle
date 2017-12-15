import Route from 'ember-route';

export function initialize() {
  if (!Route.__ember_controller_lifecycle_init) {
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
    Route.__ember_controller_lifecycle_init = true;
  }
}

export default {
  name: 'controller-lifecycle',
  initialize
};
