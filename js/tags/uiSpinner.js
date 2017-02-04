/**
 * 
 */
var uiSpinner = {
	'title' : 'ui:spinner',
	'description' : 'A loading spinner to be used while the real component body is being loaded',
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
				'name' : 'isVisible',
				'type' : 'Boolean',
				'description' : 'Specifies whether or not this spinner should be visible. Defaults to true.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
			}, {
				'name' : 'toggle',
				'type' : 'Event',
				'description' : 'The event fired when the spinner is toggled.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			}

	],
	'nodes' : []
};