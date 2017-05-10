import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

let worry = Ember.Object.create({
  title: 'test-title',
  type: 'real',
  description: "test-description",
  date: Date.now()
});

moduleForComponent('worry-item', 'Integration | Component | worry item', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('worryObj', worry)
  this.render(hbs`{{worry-item worry=worryObj}}`);

  assert.equal(this.$('.item .item-title').text(), 'test-title', 'test-title');
  assert.equal(this.$('.item .item-type').text().trim(), 'real');
  assert.equal(this.$('.item .text-description').text().trim(), 'test-description');
  this.will.fail;
});
