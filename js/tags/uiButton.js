/**
 * 
 */
var uiButton = {
	'title' : 'ui:button',
	'description' : 'Represents a button element.',
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
				'description' : 'The keyboard access key that puts the button in focus. When the button is in focus, pressing Enter clicks the button.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},

			{
				'name' : 'buttonTitle',
				'type' : 'String',
				'description' : 'The text displayed in a tooltip when the mouse pointer hovers over the button.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'buttonType',
				'type' : 'String',
				'description' : 'Specifies the type of button. Possible values: reset, submit, or button. This value defaults to button.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'reset', 'submit', 'button' ]
			},
			{
				'name' : 'class',
				'type' : 'String',
				'description' : 'A CSS style to be attached to the button. This style is added in addition to base styles output by the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'disabled',
				'type' : 'Boolean',
				'description' : 'Specifies whether this button should be displayed in a disabled state. Disabled buttons can\'t be clicked. Default value is ""false"".',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
			},
			{
				'name' : 'label',
				'type' : 'String',
				'description' : 'The text displayed on the button. Corresponds to the value attribute of the rendered HTML input element.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'labelClass',
				'type' : 'String',
				'description' : 'A CSS style to be attached to the label. This style is added in addition to base styles output by the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			}, {
				'name' : 'press',
				'type' : 'Event',
				'description' : 'The event fired when the button is clicked.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			}

	],
	'nodes' : []
};