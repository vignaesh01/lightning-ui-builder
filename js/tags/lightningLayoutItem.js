/**
 * 
 */
var lightningLayoutItem = {
	'title' : 'lightning:layoutItem',
	'description' : 'The basic element of lightning:layout.',
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
				'description' : 'A CSS class that will be applied to the outer element. This style is in addition to base classes output by the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'flexibility',
				'type' : 'Object',
				'description' : 'Make the item fluid so that it absorbs any extra space in its container or shrinks when there is less space. Allowed values are auto, shrink, no-shrink, grow, no-grow, no-flex.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'auto', 'shrink', 'no-shrink', 'grow',
						'no-grow', 'no-flex' ]
			},
			{
				'name' : 'largeDeviceSize',
				'type' : 'Integer',
				'description' : 'If the viewport is divided into 12 parts, this attribute indicates the relative space the container occupies on device-types larger than desktop. It is expressed as an integer from 1 through 12.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', '1', '2', '3', '4', '5', '6', '7', '8',
						'9', '10', '11', '12' ]
			},
			{
				'name' : 'mediumDeviceSize',
				'type' : 'Integer',
				'description' : 'If the viewport is divided into 12 parts, this attribute indicates the relative space the container occupies on device-types larger than tablet. It is expressed as an integer from 1 through 12.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', '1', '2', '3', '4', '5', '6', '7', '8',
						'9', '10', '11', '12' ]
			},
			{
				'name' : 'padding',
				'type' : 'String',
				'description' : 'Sets padding to either the right and left sides of a container, or all sides of a container. Allowed values are horizontal-small, horizontal-medium, horizontal-large, around-small, around-medium, around-large.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'horizontal-small', 'horizontal-medium',
						'horizontal-large', 'around-small', 'around-medium',
						'around-large' ]
			},
			{
				'name' : 'size',
				'type' : 'Integer',
				'description' : 'If the viewport is divided into 12 parts, size indicates the relative space the container occupies. Size is expressed as an integer from 1 through 12. This applies for all device-types.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', '1', '2', '3', '4', '5', '6', '7', '8',
						'9', '10', '11', '12' ]
			},
			{
				'name' : 'smallDeviceSize',
				'type' : 'Integer',
				'description' : 'If the viewport is divided into 12 parts, this attribute indicates the relative space the container occupies on device-types larger than mobile. It is expressed as an integer from 1 through 12.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', '1', '2', '3', '4', '5', '6', '7', '8',
						'9', '10', '11', '12' ]
			}

	],
	'nodes' : []
};