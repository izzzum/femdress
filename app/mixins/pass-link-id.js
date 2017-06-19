import Ember from 'ember';

export default Ember.Mixin.create({
    setupController(controller, model){
        this._super(controller, model);
        let route = this.get('routeName');
        this.controllerFor(route).set('linkId', `#${route}`);
        this.controllerFor(route).set('route', route);
        model.limit = model.content[0]._data.limit;
    },
});
