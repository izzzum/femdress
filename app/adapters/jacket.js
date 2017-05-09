import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
    host: 'http://femdress.ru',
    namespace: 'API',
    ajaxOptions: function(url, type, options){
        var hash = this._super(url, type, options);
        hash.dataType = 'jsonp';
        return hash;
    }
});
