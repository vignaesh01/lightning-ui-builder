/**
 * 
 */
var lightningSelect = {
	'title' : 'lightning:select',
	'description' : 'Represents a select input.',
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
				'name' : 'accesskey',
				'type' : 'String',
				'description' : 'Specifies a shortcut key to activate or focus an element.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},

			{
				'name' : 'class',
				'type' : 'String',
				'description' : 'A CSS class that will be applied to the outer element. This style is in addition to base classes associated with the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'disabled',
				'type' : 'Boolean',
				'description' : 'Specifies that an input element should be disabled. This value defaults to false.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
			},
			{
				'name' : 'label',
				'type' : 'String',
				'description' : 'Text that describes the desired select input.',
				'value' : '',
				'isRequired' : true,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'messageWhenValueMissing',
				'type' : 'String',
				'description' : 'Error message to be displayed when the value is missing.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'name',
				'type' : 'String',
				'description' : 'Specifies the name of an input element.',
				'value' : '',
				'isRequired' : true,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'onblur',
				'type' : 'Action',
				'description' : 'The action triggered when the element releases focus.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'onchange',
				'type' : 'Action',
				'description' : 'The action triggered when a value attribute changes.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'onfocus',
				'type' : 'Action',
				'description' : 'The action triggered when the element receives focus.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'readonly',
				'type' : 'Boolean',
				'description' : 'Specifies that an input field is read-only. This value defaults to false.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
			},
			{
				'name' : 'required',
				'type' : 'Boolean',
				'description' : 'Specifies that an input field must be filled out before submitting the form. This value defaults to false.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
			},
			{
				'name' : 'tabindex',
				'type' : 'Integer',
				'description' : 'Specifies the tab order of an element (when the tab button is used for navigating).',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'validity',
				'type' : 'Object',
				'description' : 'Represents the validity states that an element can be in, with respect to constraint validation.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'value',
				'type' : 'String',
				'description' : 'The value of the select, also used as the default value to select the right option during init. If no value is provided, the first option will be selected.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			}

	],
	'nodes' : []
};