import { initialize } from 'dummy/initializers/controller-lifecycle';
import { module, test } from 'qunit';
import Route from '@ember/routing/route';
import Controller from '@ember/controller';
import sinon from 'sinon';

module('Unit | Initializer | controller-lifecycle', function() {
  test('it is idempotent', function(assert) {
    let setupSpy = sinon.spy();
    let controller = Controller.extend({
      setup: setupSpy
    }).create();

    let route;
    function act() {
      route = Route.create();
      setupSpy.resetHistory();
      route.setupController(controller);
    }

    // can't do these because acceptance test could have run first
    // and reopen is global

    // act();

    // assert.notOk(setupSpy.called, 'fresh route doesn\'t call');

    initialize();

    act();

    assert.ok(setupSpy.calledOnce, 'calls once after first call');

    initialize();

    act();

    assert.ok(setupSpy.calledOnce, 'calls only once after second call');
  });
});
