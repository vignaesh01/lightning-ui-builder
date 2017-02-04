/**
 * 
 */
var lightningLayout = {
	'title' : 'lightning:layout',
	'description' : 'Represents a responsive grid system for arranging containers on a page.',
	"selected" : false,
	'attributes' : [
			
			{
				'name' : 'class',
				'type' : 'String',
				'description' : 'A CSS class that is applied to the outer element. This style is in addition to base classes output by the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'horizontalAlign',
				'type' : 'String',
				'description' : 'Determines how to spread the layout items horizontally. The alignment options are center, space, spread, and end.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','center', 'space', 'spread', 'end']
			},
			{
				'name' : 'multipleRows',
				'type' : 'Boolean',
				'description' : 'Determines whether to wrap the child items when they exceed the layout width. If true, the items wrap to the following line. This value defaults to false.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
			},
			{
				'name' : 'pullToBoundary',
				'type' : 'String',
				'description' : 'Pulls layout items to the layout boundaries and corresponds to the padding size on the layout item. Possible values are small, medium, or large.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','small','medium',  'large']
			},
			{
				'name' : 'verticalAlign',
				'type' : 'String',
				'description' : 'Determines how to spread the layout items vertically. The alignment options are start, center, end, and stretch.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','start', 'center', 'end', 'stretch']
			}

	],
	'nodes' : []
};