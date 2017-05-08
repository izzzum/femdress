import Ember from 'ember';

export default Ember.Mixin.create({
    setupController(controller, model){
        this._super(controller, model);
        this.controllerFor(this.get('routeName')).set('linkId', `#${this.get('routeName')}`);
    },
});
