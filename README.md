# ember-controller-lifecycle

[![npm version](https://badge.fury.io/js/ember-controller-lifecycle.svg)](https://badge.fury.io/js/ember-controller-lifecycle)
[![Build Status](https://travis-ci.org/kellyselden/ember-controller-lifecycle.svg?branch=master)](https://travis-ci.org/kellyselden/ember-controller-lifecycle)
![Ember Version](https://embadge.io/v1/badge.svg?start=2.8.0)

Add route lifecycle hooks to a route's controller

```js
import Ember from 'ember';

export default Ember.Controller.extend({
  setupController(model) {
  },
  deactivate() {
  }
});
```

## Installation

* `git clone <repository-url>` this repository
* `cd ember-controller-lifecycle`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
