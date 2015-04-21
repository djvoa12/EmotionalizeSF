import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(datetime) {
  var month = (datetime.getMonth() + 1).toString();
  var day = datetime.getDate().toString();
  var year = datetime.getFullYear().toString();

  if (month.length < 2) {
    month = '0'.concat(month);
  }

  if (day.length < 2) {
    day = '0'.concat(day);
  }

  return `${month}-${day}-${year}`;
});