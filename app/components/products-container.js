import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['row'],
    store: Ember.inject.service(),
    isLoadingNow: false,
    didInsertElement: function() {
        let _this = this;
        Ember.$(window).bind("scroll", function(){
            _this.didScroll();
        });
    },
    isThereMore: Ember.computed('isLoadingNow', function(){
       return this.get('isLoadingNow');
    }),
    didScroll: function() {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        st += Ember.$(window).height();
        if(st >= Ember.$('body').outerHeight(true))   //user scrolled to bottom of the page?
        {
            if(this.get('isLoadingNow') === false && this.get('store').peekAll(this.get('route')).content.length < this.get('model').limit) {
                this.set('isLoadingNow', true);
                this.send('loadMore');
            }
        }
    },
    willDestroyElement: function() {
        Ember.$(window).unbind("scroll");
        //Ember.RSVP.resolve(this.get('promise'));
    },
    actions:{
        loadMore: function() {
            let route = this.get('route');
            let _this = this;
            let items = this.get('store').peekAll(route);
            let offset = items.content.length;
                _this.get('store').query(route, {
                offset: offset}).then(function() {
                    _this.set('model', _this.get('store').peekAll(route));
                    _this.set('model.limit', _this.get('model').content[0]._data.limit);
                    _this.set('isLoadingNow', false);
                });
        }
    }
});
