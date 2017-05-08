import Ember from 'ember';

export default Ember.Mixin.create({
    init(){
        let _this = this;
        Ember.$(document).ready(function(){
            Ember.$(_this.get('linkId')).addClass('active');
        });
    },
});
