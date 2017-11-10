import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

module('Acceptance | count', {
  afterEach() {
    if (this.application) {
      destroyApp(this.application);
    }
  }
});

test('setup() is called once even after creating and destroying multiple apps', function(assert) {
  destroyApp(startApp());
  this.application = startApp();

  visit('/count');

  andThen(function() {
    assert.equal(find('*').text().trim(), '1');
  });
});
