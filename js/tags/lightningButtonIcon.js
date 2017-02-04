/**
 * 
 */
var lightningButtonIcon = {
	'title' : 'lightning:buttonIcon',
	'description' : 'A lightning:buttonIcon component represents an icon-only button element that executes an action in a controller.',
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
				'name' : 'alternativeText',
				'type' : 'String',
				'description' : 'The alternative text used to describe the icon. This text should describe what happens when you click the button, for example \'Upload File\', not what the icon looks like, \'Paperclip\'.',
				'value' : '',
				'isRequired' : true,
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
				'name' : 'iconClass',
				'type' : 'String',
				'description' : 'The class to be applied to the contained icon element.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'iconName',
				'type' : 'String',
				'description' : 'The Lightning Design System name of the icon. Names are written in the format \'\\utility:down\\\' where \'utility\' is the category, and \'down\' is the specific icon to be displayed. Note: Only utility icons can be used in this component.',
				'value' : '',
				'isRequired' : true,
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
				'description' : 'The action that will be run when the button is clicked.',
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
				'name' : 'size',
				'type' : 'String',
				'description' : 'The size of the buttonIcon. For the bare variant, options include x-small, small, medium, and large. For non-bare variants, options include xx-small, x-small, small, and medium. This value defaults to medium.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','xx-small','x-small', 'small', 'medium', 'large']
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
				'description' : 'The variant changes the appearance of buttonIcon. Accepted variants include bare, container, border, border-filled, bare-inverse, and border-inverse. This value defaults to border.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','bare', 'container', 'border', 'border-filled', 'bare-inverse',  'border-inverse']
			} ],
	'nodes' : []
};