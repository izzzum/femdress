import DS from 'ember-data';

export default DS.Model.extend({
  brand: DS.attr('string'),
  description: DS.attr('string'),
  discount: DS.attr('number'),
  discountedPrice: DS.attr('string'),
  fullName: DS.attr('string'),
  shortName: DS.attr('string'),
  instock: DS.attr('boolean'),
  limit: DS.attr('number'),
  manufactor: DS.attr('string'),
  new: DS.attr('boolean'),
  price: DS.attr('string'),
  properties: DS.attr('string'),
  sale: DS.attr('boolean'),
  size: DS.attr('string'),
  type: DS.attr('string'),
  pictures: DS.hasMany('pictures')
});
