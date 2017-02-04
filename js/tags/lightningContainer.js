/**
 * 
 */
var lightningContainer = {
	'title' : 'lightning:container',
	'description' : 'The lightning:container component allows you to host content developed with a third-party framework within a Lightning component. ',
	"selected" : false,
	'attributes' : [
			{
				'name' : 'alternativeText',
				'type' : 'String',
				'description' : 'Used for alternative text in accessibility scenarios.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			
			{
				'name' : 'class',
				'type' : 'String',
				'description' : 'The CSS class for the iframe element.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'onerror',
				'type' : 'Action',
				'description' : 'The client-side controller action to run when an error occurs when sending a message to the contained app.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'onmessage',
				'type' : 'Action',
				'description' : 'The client-side controller action to run when a message is received from the contained content.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'src',
				'type' : 'String',
				'description' : 'The resource name, landing page and query params in url format. Navigation is supported only for the single page identified.',
				'value' : '',
				'isRequired' : true,
				'isMultiValued' : false,
				'validValues' : []
			} ],
	'nodes' : []
};