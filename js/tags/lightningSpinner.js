/**
 * 
 */
var lightningSpinner = {
	'title' : 'lightning:spinner',
	'description' : 'Displays an animated spinner.',
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
				'name' : 'alternativeText',
				'type' : 'String',
				'description' : 'The alternative text used to describe the reason for the wait and need for a spinner.',
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
				'name' : 'size',
				'type' : 'String',
				'description' : 'The size of the spinner. Accepted sizes are small, medium, and large. This value defaults to medium.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'small', 'medium', 'large' ]
			},
			{
				'name' : 'variant',
				'type' : 'String',
				'description' : 'The variant changes the appearance of the spinner. Accepted variants are brand and inverse.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'brand', 'inverse' ]
			}

	],
	'nodes' : []
};