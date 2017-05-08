import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('new');
  this.route('sale');
  this.route('route');
  this.route('jacket');
  this.route('suit');
  this.route('dress');
});

export default Router;
