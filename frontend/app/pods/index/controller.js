import Ember from 'ember';

var computed = Ember.computed;

export default Ember.Controller.extend({
  upcomingEvents: computed.filter('model', (event) => {
    var date = new Date();
    date.setDate(date.getDate() - 1);
    date.setHours(22);

    if (date < event.get('date')) {
      return event;
    }
  })
});
