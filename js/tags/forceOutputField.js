/**
 * 
 */
var forceOutputField = {
	'title' : 'force:outputField',
	'description' : 'A component that provides a concrete type-specific output component implementation based on the data to which it is bound.',
	"selected" : false,
	'attributes' : [

			{
				'name' : 'class',
				'type' : 'String',
				'description' : 'A CSS style to be attached to the component. This style is added in addition to base styles output by the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'value',
				'type' : 'Object',
				'description' : 'Data value of Salesforce field to which to bind.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			}

	],
	'nodes' : []
};