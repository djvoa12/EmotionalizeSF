import Ember from 'ember';

const { $, Component, computed, isEmpty, observer} = Ember;

export default Component.extend({
  classNames: ['search-box'],

  limit: 5,

  filteredResults: computed('items.@each', 'value', {
    get() {
      if (!isEmpty(this.get('items'))) {
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
  },

  searchedKeyword: observer('value', function() {
    let autocomplete = '#input-autocomplete';
    let input = '.ff-autocomplete-field';
    let header = '.main-header';
    let searched = 'search-performed';

    if (isEmpty(this.get('value'))) {
      $(header).removeClass(searched);
      $(autocomplete).removeClass(searched);
      $(input).removeClass(searched);
    } else {
      $(header).addClass(searched);
      $(autocomplete).addClass(searched);
      $(input).addClass(searched);
    }
  })
});
