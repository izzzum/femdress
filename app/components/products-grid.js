import Ember from 'ember';

export default Ember.Component.extend({
    classNames:['col-xs-4', 'col-sm-2', 'col-md-2', 'col-lg-2'],
    thumb: Ember.computed(function(){
        let product = this.get('product');
        let pic;
        let i = 0;
        product.get('pictures').forEach(function(element) {
            if(i === 0){
                pic = element.id;
            }
        });
        return pic;
    })
});
