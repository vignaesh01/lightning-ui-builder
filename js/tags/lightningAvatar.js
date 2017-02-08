/**
 * 
 */
var lightningAvatar = {
	'title' : 'lightning:avatar',
	'description' : 'A lightning:avatar component is an image that represents a person. ',
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
				'description' : 'The alternative text used to describe the avatar, which is displayed as hover text on the image.',
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
				'name' : 'size',
				'type' : 'String',
				'description' : 'The size of the avatar. Valid values are x-small, small, medium, and large. This value defaults to medium.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'x-small', 'small', 'medium', 'large' ]
			},
			{
				'name' : 'src',
				'type' : 'String',
				'description' : 'The URL for the image.',
				'value' : '',
				'isRequired' : true,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'variant',
				'type' : 'String',
				'description' : 'The variant changes the shape of the avatar. Valid values are empty, circle, and square. This value defaults to square.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'empty', 'circle', 'square' ]
			}

	],
	'nodes' : []
};