import Route from 'ember-route';

export function initialize() {
  Route.reopen({
    setupController(controller, model) {
      this._super(...arguments);

      if (controller.setupController) {
        controller.setupController(model);
      }
    },
    resetController(controller, isExiting) {
      this._super(...arguments);

      if (controller.resetController) {
        controller.resetController(isExiting);
      }
    }
  });
}

export default {
  name: 'controller-lifecycle',
  initialize
};
