import Ember from 'ember';
import LinkId from '../mixins/pass-link-id';

export default Ember.Route.extend(LinkId, {
    model: function() { 
       return this.store.query('new', {offset: 0, limit: 20});
    },
});