/**
 * 
 */
var uiRadioMenuItem = {
	'title' : 'ui:radioMenuItem',
	'description' : 'A menu item with a radio button that indicates a mutually exclusive selection and can be used to invoke an action. This component is nested in a ui:menu component.',
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
				'name' : 'hideMenuAfterSelected',
				'type' : 'Boolean',
				'description' : 'Set to true to hide menu after the menu item is selected.',
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
				'name' : 'selected',
				'type' : 'Boolean',
				'description' : 'The status of the menu item. True means this menu item is selected; False is not selected.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
			},
			{
				'name' : 'type',
				'type' : 'String',
				'description' : 'The concrete type of the menu item. Accepted values are \'action\', \'checkbox\', \'radio\', \'separator\' or any namespaced component descriptor, e.g. ns:xxxxmenuItem.',
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
			} ],
	'nodes' : []
};