import Ember from 'ember';

export default Ember.Component.extend({
    classNames:['container'],
    isOpen: false,
    iSnavbarClosed: true,
    isDropdownActive: false,
    actions: {
        dropdownToggle(close, id, dropdown) {
            if(close){
                this.set('isOpen', false);
            }else{
                this.toggleProperty('isOpen');
            }
            if(Ember.isPresent(id)){
                Ember.$('.active').removeClass('active');
                if(!this.get('iSnavbarClosed')){
                    this.send('navbarToggle');
                }
            }
            if(dropdown){
                this.set('isDropdownActive', true);
            }else{
                this.set('isDropdownActive', false);
            }
            Ember.$(`#${id}`).addClass('active');
        },
        navbarToggle() {
            if(this.get('isDropdownActive') && Ember.$('.active').length > 1){
                this.set('isOpen', true);
            }
            if(this.get('iSnavbarClosed')){
                Ember.$('.navbar-collapse').show(400);
            }else{
                 Ember.$('.navbar-collapse').hide(400);
            }
            this.toggleProperty('iSnavbarClosed');
        }
    }
});
