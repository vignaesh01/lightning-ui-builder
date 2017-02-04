/**
 * 
 */
var auraTemplate = {
	'title' : 'aura:template',
	'description' : 'Default template used to bootstrap Aura framework.',
	"selected" : false,
	'attributes' : [ {
		'name' : 'auraPreInitBlock',
		'type' : 'Component[]',
		'description' : 'The block of content that is rendered before Aura initialization.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}, {
		'name' : 'bodyClass',
		'type' : 'String',
		'description' : 'Extra body CSS styles',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}, {
		'name' : 'defaultBodyClass',
		'type' : 'String',
		'description' : 'Default body CSS styles.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}, {
		'name' : 'doctype',
		'type' : 'String',
		'description' : 'The DOCTYPE declaration for the template.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}, {
		'name' : 'errorMessage',
		'type' : 'String',
		'description' : 'Error loading text',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}, {
		'name' : 'errorTitle',
		'type' : 'String',
		'description' : 'Error title when an error has occured.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}, {
		'name' : 'loadingText',
		'type' : 'String',
		'description' : 'Loading text',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}, {
		'name' : 'title',
		'type' : 'String',
		'description' : 'The title of the template.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}

	],
	'nodes' : []
};