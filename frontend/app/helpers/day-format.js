import momentDays from '../utils/moment-days';

/* globals moment */
import Ember from 'ember';

const { Helper } = Ember;
const { helper } = Helper;

export function dayFormat(datetime) {
  let argument = datetime[0];
  let day = moment(argument).utcOffset(7).day();

  return momentDays[day];
}

export default helper(dayFormat);
