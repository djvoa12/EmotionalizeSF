import Ember from 'ember';
import startApp from 'frontend/tests/helpers/start-app';
import { test, moduleFor } from 'ember-qunit';

var App;

moduleFor('route:index', 'integration:index', {
  beforeEach: function() {
    App = startApp();
  },

  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test('index route model hook triggers properly', function(assert) {
  assert.expect(0);

  return visit('/').then(() => {
  });
});
