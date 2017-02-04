/**
 * 
 */
var auraDependency = {
	'title' : 'aura:dependency',
	'description' : 'Enables you to declare dependencies that can\'t easily be discovered by the framework.',
	"selected" : false,
	'attributes' : [ {
		'name' : 'resource',
		'type' : 'String',
		'description' : 'The resource that the component depends on. For example, resource="markup://sampleNamespace:sampleComponent" refers to the sampleComponent in the sampleNamespace namespace.'
						+'Use an asterisk (*) in the resource name for wildcard matching. For example, resource="markup://sampleNamespace:*" matches everything in the namespace; resource="markup://sampleNamespace:input*" matches everything in the namespace that starts with input.'
						+'Don’t use an asterisk (*) in the namespace portion of the resource name. For example, resource="markup://sample*:sampleComponent" is not supported.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}, {
		'name' : 'type',
		'type' : 'String',
		'description' : 'The type of resource that the component depends on. The default value is COMPONENT. Use type="*" to match all types of resources.'
			+'The most commonly used values are:'

				+'COMPONENT,'
				+'APPLICATION,'
				+'EVENT',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}

	],
	'nodes' : []
};