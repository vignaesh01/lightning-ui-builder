/**
 * 
 */
var forceInputField = {
	'title' : 'force:inputField',
	'description' : 'A component that provides a concrete type-specific input component implementation based on the data to which it is bound.',
	"selected" : false,
	'attributes' : [
			{
				'name' : 'aura:id',
				'type' : 'String',
				'description' : 'Component ID',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'class',
				'type' : 'String',
				'description' : 'The CSS style used to display the field.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'errorComponent',
				'type' : 'Component[]',
				'description' : 'A component which is responsible for displaying the error message.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'required',
				'type' : 'Boolean',
				'description' : 'Specifies whether this field is required or not.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
			},
			{
				'name' : 'value',
				'type' : 'Object',
				'description' : 'Data value of Salesforce field to which to bind.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'change',
				'type' : 'Event',
				'description' : 'The event fired when the user changes the content of the input.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			}

	],
	'nodes' : []
};