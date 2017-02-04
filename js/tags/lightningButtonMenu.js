/**
 * 
 */
var lightningButtonMenu = {
	'title' : 'lightning:buttonMenu',
	'extras':'(Beta)',
	'description' : 'A lightning:buttonMenu represents a button that when clicked displays a dropdown menu of actions or functions that a user can access.',
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
				'description' : 'The assistive text for the button.',
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
				'description' : 'If true, the menu is disabled. Disabling the menu prevents users from opening it. This value defaults to false.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
			},
			{
				'name' : 'iconName',
				'type' : 'String',
				'description' : 'The name of the icon to be used in the format \\\'utility:down\\\'. This value defaults to utility:down. If an icon other than utility:down or utility:chevrondown is used, a utility:down icon is appended to the right of that icon.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'iconSize',
				'type' : 'String',
				'description' : 'The size of the icon. Options include xx-small, x-small, medium, or large. This value defaults to medium.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','xx-small','x-small', 'medium', 'large']
			},
			{
				'name' : 'menuAlignment',
				'type' : 'String',
				'description' : 'Determines the alignment of the menu relative to the button. Available options are: left, center, right. This value defaults to left.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','left', 'center', 'right']
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
				'name' : 'onfocus',
				'type' : 'Action',
				'description' : 'The action triggered when the element receives focus.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'onselect',
				'type' : 'Action',
				'description' : 'Action fired when a menu item is selected. The \'detail.menuItem\' property of the passed event is the selected menu item.',
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
				'description' : 'Tooltip text on the button.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
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
				'description' : 'The variant changes the look of the button. Accepted variants include bare, container, border, border-filled, bare-inverse, and border-inverse. This value defaults to border.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','bare', 'container', 'border', 'border-filled', 'bare-inverse',  'border-inverse']
			},
			{
				'name' : 'visible',
				'type' : 'Boolean',
				'description' : 'If true, the menu items are displayed. This value defaults to false.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
			} ],
	'nodes' : []
};