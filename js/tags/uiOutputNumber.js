/**
 * 
 */
var uiOutputNumber = {
	'title' : 'ui:outputNumber',
	'description' : 'Displays the number in the default or specified format. Supports up to 18 digits before the decimal place.',
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
				'name' : 'format',
				'type' : 'String',
				'description' : 'The format of the number. For example, format=“.00” displays the number followed by two decimal places. If not specified, the Locale default format will be used.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'value',
				'type' : 'BigDecimal',
				'description' : 'The number displayed when this component is rendered.',
				'value' : '',
				'isRequired' : true,
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
			}

	],
	'nodes' : []
};