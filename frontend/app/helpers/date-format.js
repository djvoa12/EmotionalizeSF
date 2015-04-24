import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(datetime) {
  var month = (datetime.getUTCMonth() + 1).toString();
  var year = datetime.getUTCFullYear().toString();
  var day = datetime.getUTCDate().toString();

  if (month.length < 2) {
    month = '0'.concat(month);
  }

  if (day.length < 2) {
    day = '0'.concat(day);
  }

  return `${month}-${day}-${year}`;
});
