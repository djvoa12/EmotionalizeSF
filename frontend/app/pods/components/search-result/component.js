import Ember from 'ember';

const { Component, inject } = Ember;
const { service } = inject;

export default Component.extend({
  classNames: ['search-result'],

  routing: service('-routing'),

  click() {
    this.get('routing').transitionTo('events.event', [ this.get('event.id') ]);
  }
});
