import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	description: DS.attr('string'),
	created: DS.attr('date'),
	deadline: DS.attr('date'),
	real: DS.attr('boolean')
});
