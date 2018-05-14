ember-controller-lifecycle
==============================================================================

[![Greenkeeper badge](https://badges.greenkeeper.io/kellyselden/ember-controller-lifecycle.svg)](https://greenkeeper.io/)
[![npm version](https://badge.fury.io/js/ember-controller-lifecycle.svg)](https://badge.fury.io/js/ember-controller-lifecycle)
[![Build Status](https://travis-ci.org/kellyselden/ember-controller-lifecycle.svg?branch=master)](https://travis-ci.org/kellyselden/ember-controller-lifecycle)
[![Ember Version](https://img.shields.io/badge/ember-2.12%2B-brightgreen.svg)](https://www.emberjs.com/)

Add route lifecycle hooks to a route's controller

## Motivation

If you want to reset state on your controller, you must override route hooks/events like so:

```js
import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller) {
    this._super(...arguments);

    controller.set('foo', null);
    controller.set('bar', Ember.A());
  }
});
```

This couples a controller's private state to its route's code. You might then create a convention where you put controller setup code in its own function that you call from the route:

```js
import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller) {
    this._super(...arguments);

    controller.setup();
  }
});
```

```js
import Ember from 'ember';

export default Ember.Controller.extend({
  setup() {
    this.set('foo', null);
    this.set('bar', Ember.A());
  }
});
```

This addon functions the same way, it just eliminates the boilerplate by calling the hooks automatically.

Installation
------------------------------------------------------------------------------

```
ember install ember-controller-lifecycle
```


Usage
------------------------------------------------------------------------------

```js
import Ember from 'ember';

export default Ember.Controller.extend({
  // https://www.emberjs.com/api/classes/Ember.Route.html#method_setupController
  setup(model) {
  },

  // https://www.emberjs.com/api/classes/Ember.Route.html#method_resetController
  reset(isExiting, transition) {
  }
});
```

The hooks are automatically installed into every controller.


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-controller-lifecycle`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
