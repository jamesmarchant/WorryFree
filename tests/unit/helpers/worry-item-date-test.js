
import { worryItemDate } from 'worry-free/helpers/worry-item-date';
import { module, test } from 'qunit';

module('Unit | Helper | worry item date');

// Replace this with your real tests.
test('it works', function(assert) {
  let date = new Date("2015-03-25")	
  let result = worryItemDate([date]);
  assert.equal(result,"25/03/2015");
});

