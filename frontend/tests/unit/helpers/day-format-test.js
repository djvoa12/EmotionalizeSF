import { dayFormat } from '../../../helpers/day-format';
import { module, test } from 'qunit';

module('Unit | Helper | day format');

test('it works', function(assert) {
  assert.expect(7);

  let dateString = ['Sat Sep 12 2015 17:00:00 GMT-0700 (PDT)',
                    'Sun Sep 13 2015 17:00:00 GMT-0700 (PDT)',
                    'Mon Sep 14 2015 17:00:00 GMT-0700 (PDT)',
                    'Tue Sep 15 2015 17:00:00 GMT-0700 (PDT)',
                    'Wed Sep 16 2015 17:00:00 GMT-0700 (PDT)',
                    'Thu Sep 17 2015 17:00:00 GMT-0700 (PDT)',
                    'Fri Sep 18 2015 17:00:00 GMT-0700 (PDT)'];

  let expected = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  for (let i = 0; i < dateString.length; i++) {
    let result = dayFormat([dateString[i]]);

    assert.equal(result, expected[i]);
  }
});
