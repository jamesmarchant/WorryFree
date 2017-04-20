import { test } from 'qunit';
import moduleForAcceptance from 'worry-free/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list worries');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/my_worries');
  });
});

test('should link to information about the company.', function (assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function() {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});
