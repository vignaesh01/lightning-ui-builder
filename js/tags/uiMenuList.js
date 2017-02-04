/**
 * 
 */
var uiMenuList = {
	'title' : 'ui:menuList',
	'description' : 'A menu component that contains menu items.This component is nested in a ui:menu component and can be used together with a ui:menuTriggerLink component. Clicking the menu trigger displays the container with menu items.',
	"selected" : false,
	'attributes' : [
			{
				'name' : 'autoPosition',
				'type' : 'Boolean',
				'description' : 'Move the popup target up when there is not enough space at the bottom to display. Note: even if autoPosition is set to false, popup will still position the menu relative to the trigger. To override default positioning, use manualPosition attribute.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
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
				'name' : 'closeOnClickOutside',
				'type' : 'Boolean',
				'description' : 'Close target when user clicks or taps outside of the target',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
			},
			{
				'name' : 'closeOnTabKey',
				'type' : 'Boolean',
				'description' : 'Indicates whether to close the target list on tab key or not.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
			},
			{
				'name' : 'curtain',
				'type' : 'Boolean',
				'description' : 'Whether or not to apply an overlay under the target.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
			},
			{
				'name' : 'menuItems',
				'type' : 'List',
				'description' : 'A list of menu items set explicitly using instances of the Java class: aura.​components.​ui.MenuItem.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'visible',
				'type' : 'Boolean',
				'description' : 'Controls the visibility of the menu. The default is false, which hides the menu.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
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
				'name' : 'menuExpand',
				'type' : 'Event',
				'description' : 'The event fired when the menu list displays.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'menuSelect',
				'type' : 'Event',
				'description' : 'The event fired when the user select a menu item.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'menuCollapse',
				'type' : 'Event',
				'description' : 'The event fired when the menu list collapses.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'menuFocusChange',
				'type' : 'Event',
				'description' : 'The event fired when the menu list focus changed from one menuItem to another menuItem.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			}

	],
	'nodes' : []
};