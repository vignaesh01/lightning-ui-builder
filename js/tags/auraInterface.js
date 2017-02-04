/**
 * 
 */
var auraInterface = {
	'title' : 'aura:interface',
	'description' : '',
	"selected" : false,
	'attributes' : [ {
		'name' : 'access',
		'type' : 'String',
		'description' : 'Indicates whether the interface can be extended or used outside of its own namespace. Possible values are public (default), and global.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : ["","public","global"]
	}, {
		'name' : 'description',
		'type' : 'String',
		'description' : 'A description of the interface.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}, {
		'name' : 'extends',
		'type' : 'Component',
		'description' : 'The comma-seperated list of interfaces to be extended. For example, extends="namespace:intfB".',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}

	],
	'nodes' : []
};