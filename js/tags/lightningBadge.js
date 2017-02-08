/**
 * 
 */
var lightningBadge = {
	'title' : 'lightning:badge',
	'description' : 'Represents a label which holds a small amount of information, such as the number of unread notifications.',
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
				'description' : 'A CSS class for the outer element, in addition to the component\'s base classes.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			}, {
				'name' : 'label',
				'type' : 'String',
				'description' : 'The text to be displayed inside the badge.',
				'value' : '',
				'isRequired' : true,
				'isMultiValued' : false,
				'validValues' : []
			}

	],
	'nodes' : []
};