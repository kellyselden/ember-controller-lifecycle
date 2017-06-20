import Route from 'ember-route';

export function initialize() {
  Route.reopen({
    setupController(controller, model) {
      this._super(...arguments);

      if (controller.setupController) {
        controller.setupController(model);
      }
    },
    deactivate() {
      let { controller } = this;

      if (controller.deactivate) {
        controller.deactivate();
      }

      this._super(...arguments);
    }
  });
}

export default {
  name: 'controller-lifecycle',
  initialize
};
