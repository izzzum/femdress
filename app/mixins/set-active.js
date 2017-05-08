import Ember from 'ember';

export default Ember.Mixin.create({
    linkId: null,
    setActive: Ember.computed('linkId', function(){
        Ember.$(this.get('linkId')).addClass('active');
    }),
});
