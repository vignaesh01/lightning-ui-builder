/**
 * 
 */
var auraHtml = {
	'title' : 'aura:html',
	'description' : 'A meta component that represents all html elements. Any html found in your markup causes the creation of one of these.',
	"selected" : false,
	'attributes' : [ {
		'name' : 'HTMLAttributes',
		'type' : 'Map',
		'description' : 'A map of attributes to set on the html element.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}, {
		'name' : 'tag',
		'type' : 'String',
		'description' : 'The name of the html element that should be rendered.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}

	],
	'nodes' : []
};