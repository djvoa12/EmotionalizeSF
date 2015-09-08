import Ember from 'ember';

const { Component, computed, isNone } = Ember;

export default Component.extend({
  classNames: ['search-box'],

  limit: 5,

  filteredResults: computed('items.@each', 'value', {
    get() {
      if (!isNone(this.get('items'))) {
        const regex = new RegExp(this.get('value'), 'i');

        let results = this.get('items').filter((item) => {
          return item.get('title').search(regex) > -1;
        });

        return results.splice(0, this.get('limit'));
      }
    }
  }).readOnly(),

  actions: {
    setValue(value) {
      this.set('value', value);
    }
  }
});
