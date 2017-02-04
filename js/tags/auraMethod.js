/**
 * 
 */
var auraMethod = {
	'title' : 'aura:method',
	'description' : 'Use <aura:method> to define a method as part of a component\'s API. This enables you to directly call a method in a component\’s client-side controller instead of firing and handling a component event. ',
	"selected" : false,
	'attributes' : [ {
		'name' : 'name',
		'type' : 'String',
		'description' : 'The method name. Use the method name to call the method in JavaScript code. For example: cmp.sampleMethod(param1);',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}, {
		'name' : 'action',
		'type' : 'Expression',
		'description' : 'The client-side controller action to execute. For example: action="{!c.sampleAction}". sampleAction is an action in the client-side controller. If you don\’t specify an action value, the controller action defaults to the value of the method name.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}, {
		'name' : 'access',
		'type' : 'String',
		'description' : 'The access control for the method. Valid values are: '
			+'public—Any component in the same namespace can call the method. This is the default access level. '
			+'global—Any component in any namespace can call the method.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}, {
		'name' : 'description',
		'type' : 'String',
		'description' : 'The method description.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}

	],
	'nodes' : []
};