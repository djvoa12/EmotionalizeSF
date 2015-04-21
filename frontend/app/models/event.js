import DS from 'ember-data';

var attr = DS.attr;
var Model = DS.Model;

export default Model.extend({
  date: attr('date'),
  title: attr('string'),
  venue: attr('string')
});