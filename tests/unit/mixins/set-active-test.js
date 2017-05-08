import Ember from 'ember';
import SetActiveMixin from 'femdress/mixins/set-active';
import { module, test } from 'qunit';

module('Unit | Mixin | set active');

// Replace this with your real tests.
test('it works', function(assert) {
  let SetActiveObject = Ember.Object.extend(SetActiveMixin);
  let subject = SetActiveObject.create();
  assert.ok(subject);
});
