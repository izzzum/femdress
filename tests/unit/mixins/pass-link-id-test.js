import Ember from 'ember';
import PassLinkIdMixin from 'femdress/mixins/pass-link-id';
import { module, test } from 'qunit';

module('Unit | Mixin | pass link id');

// Replace this with your real tests.
test('it works', function(assert) {
  let PassLinkIdObject = Ember.Object.extend(PassLinkIdMixin);
  let subject = PassLinkIdObject.create();
  assert.ok(subject);
});
