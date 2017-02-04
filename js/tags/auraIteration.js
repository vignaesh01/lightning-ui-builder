/**
 * 
 */
var auraIteration = {
	'title' : 'aura:iteration',
	'description' : 'aura:iteration iterates over a collection of items and renders the body of the tag for each item.',
	"selected" : false,
	'attributes' : [ {
		'name' : 'end',
		'type' : 'Integer',
		'description' : 'The index of the collection to stop at (exclusive)',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}, {
		'name' : 'indexVar',
		'type' : 'String',
		'description' : 'The name of variable to use for the index of each item inside the iteration',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}, {
		'name' : 'items',
		'type' : 'List',
		'description' : 'The collection of data to iterate over',
		'value' : '',
		'isRequired' : true,
		'isMultiValued' : false,
		'validValues' : []
	}, {
		'name' : 'loaded',
		'type' : 'Boolean',
		'description' : 'True if the iteration has finished loading the set of templates.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}, {
		'name' : 'start',
		'type' : 'Integer',
		'description' : 'The index of the collection to start at (inclusive)',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}, {
		'name' : 'var',
		'type' : 'String',
		'description' : 'The name of the variable to use for each item inside the iteration',
		'value' : '',
		'isRequired' : true,
		'isMultiValued' : false,
		'validValues' : []
	},{
		'name' : 'template',
		'type' : 'ComponentDefRef[]',
		'description' : 'The template that is used to generate components. By default, this is set from the body markup on first load.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}

	],
	'nodes' : []
};