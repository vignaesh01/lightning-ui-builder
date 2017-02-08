/**
 * 
 */
var uiMenuTrigger = {
	'title' : 'ui:menuTrigger',
	'description' : 'A clickable link that expands and collapses a menu. To create a link for ui:menu, use ui:menuTriggerLink instead.',
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
				'description' : 'A CSS style to be attached to the component. This style is added in addition to base styles output by the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'disabled',
				'type' : 'Boolean',
				'description' : 'Specifies whether the component should be displayed in a disabled state. Default value is ""false"".',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
			},
			{
				'name' : 'label',
				'type' : 'String',
				'description' : 'The text displayed on the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'title',
				'type' : 'String',
				'description' : 'The text to display as a tooltip when the mouse pointer hovers over this component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'dblclick',
				'type' : 'Event',
				'description' : 'The event fired when the user double-clicks the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'mouseover',
				'type' : 'Event',
				'description' : 'The event fired when the user moves the mouse pointer over the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'mouseout',
				'type' : 'Event',
				'description' : 'The event fired when the user moves the mouse pointer away from the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'mouseup',
				'type' : 'Event',
				'description' : 'The event fired when the user releases the mouse button over the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'mousemove',
				'type' : 'Event',
				'description' : 'The event fired when the user moves the mouse pointer over the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'click',
				'type' : 'Event',
				'description' : 'The event fired when the user clicks on the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'mousedown',
				'type' : 'Event',
				'description' : 'The event fired when the user clicks a mouse button over the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'select',
				'type' : 'Event',
				'description' : 'The event fired when the user selects some text.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'blur',
				'type' : 'Event',
				'description' : 'The event fired when the user moves off from the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'focus',
				'type' : 'Event',
				'description' : 'The event fired when the user focuses on the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'keypress',
				'type' : 'Event',
				'description' : 'The event fired when the user presses or holds down a keyboard key on the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'keyup',
				'type' : 'Event',
				'description' : 'The event fired when the user releases a keyboard key on the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'keydown',
				'type' : 'Event',
				'description' : 'The event fired when the user presses a keyboard key on the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'menuTriggerPress',
				'type' : 'Event',
				'description' : 'The event that is fired when the trigger is clicked.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			}

	],
	'nodes' : []
};