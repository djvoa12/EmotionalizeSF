import { dateFormat } from '../../../helpers/date-format';
import { module, test } from 'qunit';

module('Unit | Helper | date format');

test('it works', function(assert) {
  let dateString = "2015-06-26T01:50:58.681Z";
  let result = dateFormat([dateString]);

  assert.equal(result, "06-26-15");
});
