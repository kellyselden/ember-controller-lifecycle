import Route from 'ember-route';

export function initialize() {
  Route.reopen({
    setupController(controller, ...args) {
      this._super(...arguments);

      if (controller.setupController) {
        controller.setupController(...args);
      }
    },
    resetController(controller, ...args) {
      this._super(...arguments);

      if (controller.resetController) {
        controller.resetController(...args);
      }
    }
  });
}

export default {
  name: 'controller-lifecycle',
  initialize
};
