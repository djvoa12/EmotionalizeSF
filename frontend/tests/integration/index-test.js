import Ember from 'ember';
import startApp from '../helpers/start-app.js';
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
  assert.expect(1);

  return visit('/').then(() => {
    assert.equal(find('p:first').text(), '04-20-2015 | Bear Grillz | The Mid');
  });
});