# ember-controller-lifecycle

[![Greenkeeper badge](https://badges.greenkeeper.io/kellyselden/ember-controller-lifecycle.svg)](https://greenkeeper.io/)
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

```sh
ember install ember-controller-lifecycle
```

## Usage

The hooks are automatically installed into every controller.
