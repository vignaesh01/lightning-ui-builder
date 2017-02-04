/**
 * 
 */
var lightningButton = {
	'title' : 'lightning:button',
	'description' : 'A lightning:button component represents a button element that executes an action in a controller. ',
	"selected" : false,
	'attributes' : [
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
				'description' : 'A CSS class for the outer element, in addition to the component\'s base classes.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'disabled',
				'type' : 'Boolean',
				'description' : 'Specifies whether this button should be displayed in a disabled state. Disabled buttons can\'t be clicked. This value defaults to false.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
			},
			{
				'name' : 'iconName',
				'type' : 'String',
				'description' : 'The Lightning Design System name of the icon. Names are written in the format \'\\utility:down\\\' where \'utility\' is the category, and \'down\' is the specific icon to be displayed.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'iconPosition',
				'type' : 'String',
				'description' : 'Describes the position of the icon with respect to body. Options include left and right. This value defaults to left.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','left','right']
			},
			{
				'name' : 'label',
				'type' : 'String',
				'description' : 'The text to be displayed inside the button.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'name',
				'type' : 'String',
				'description' : 'The name for the button element. This value is optional and can be used to identify the button in a callback.',
				'value' : '',
				'isRequired' : false,
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
				'name' : 'onclick',
				'type' : 'Action',
				'description' : 'The action triggered when the button is clicked.',
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
				'name' : 'tabindex',
				'type' : 'Integer',
				'description' : 'Specifies the tab order of an element (when the tab button is used for navigating).',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'title',
				'type' : 'String',
				'description' : 'Displays tooltip text when the mouse moves over the element.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'type',
				'type' : 'String',
				'description' : 'Specifies the type of button. Valid values are button, reset, and submit. This value defaults to button.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','button', 'reset', 'submit']
			},
			{
				'name' : 'value',
				'type' : 'String',
				'description' : 'The value for the button element. This value is optional and can be used when submitting a form.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'variant',
				'type' : 'String',
				'description' : 'The variant changes the appearance of the button. Accepted variants include base, neutral, brand, and destructive. This value defaults to neutral.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','base', 'neutral', 'brand', 'destructive']
			}

	],
	'nodes' : []
};