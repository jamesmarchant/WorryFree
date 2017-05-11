import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

let worryReal = Ember.Object.create({
  title: 'test-title',
  real: true,
  description: "test-description",
  date: Date.now()
});

let worryHypothetical = Ember.Object.create({
  title: 'test-title',
  real: false,
  description: "test-description",
  date: Date.now()
});

moduleForComponent('worry-item', 'Integration | Component | worry item', {
  integration: true
});

test('it renders real worry', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('worryObj', worryReal)
  this.render(hbs`{{worry-item worry=worryObj}}`);

  assert.equal(this.$('.item .item-title').text(), 'test-title', 'test-title');
  assert.equal(this.$('.item .item-type').text().trim(), 'Real');
  assert.equal(this.$('.item .text-description').text().trim(), 'test-description');
});

test('it renders hypothetical worry', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('worryObj', worryHypothetical)
  this.render(hbs`{{worry-item worry=worryObj}}`);

  assert.equal(this.$('.item .item-title').text(), 'test-title', 'test-title');
  assert.equal(this.$('.item .item-type').text().trim(), 'Hypothetical');
  assert.equal(this.$('.item .text-description').text().trim(), 'test-description');
});
