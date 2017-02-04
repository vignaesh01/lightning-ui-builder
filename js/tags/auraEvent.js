/**
 * 
 */
var auraEvent = {
	'title' : 'aura:event',
	'description' : 'An event is represented by the aura:event tag, which has the following attributes.',
	"selected" : false,
	'attributes' : [ {
		'name' : 'access',
		'type' : 'String',
		'description' : 'Indicates whether the event can be extended or used outside of its own namespace. Possible values are public (default), and global.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : ["","public","global"]
	}, {
		'name' : 'description',
		'type' : 'String',
		'description' : 'A description of the event.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}, {
		'name' : 'extends',
		'type' : 'Component',
		'description' : 'The event to be extended. For example, extends="namespace:myEvent".',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}, {
		'name' : 'type',
		'type' : 'String',
		'description' : 'Required. Possible values are COMPONENT or APPLICATION.',
		'value' : '',
		'isRequired' : true,
		'isMultiValued' : false,
		'validValues' : ["COMPONENT","APPLICATION"]
	}

	],
	'nodes' : []
};