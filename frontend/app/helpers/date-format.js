/* globals moment */
import Ember from 'ember';

const { Helper } = Ember;
const { helper } = Helper;

export function dateFormat(datetime) {
  let argument = datetime[0];

  return moment(argument).utcOffset("+07:00").format("MM-DD-YY");
}

export default helper(dateFormat);
