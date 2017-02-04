/**
 * 
 */
var lightningIcon = {
	'title' : 'lightning:icon',
	'description' : 'Represents a visual element that provides context and enhances usability.',
	"selected" : false,
	'attributes' : [
			{
				'name' : 'alternativeText',
				'type' : 'String',
				'description' : 'The alternative text used to describe the icon. This text should describe what happens when you click the button, for example \'Upload File\', not what the icon looks like, \'Paperclip\'.',
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
				'name' : 'iconName',
				'type' : 'String',
				'description' : 'The Lightning Design System name of the icon. Names are written in the format \'\\utility:down\\\' where \'utility\' is the category, and \'down\' is the specific icon to be displayed.',
				'value' : '',
				'isRequired' : true,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'size',
				'type' : 'String',
				'description' : 'The size of the icon. Options include xx-small, x-small, small, medium, or large. This value defaults to medium.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','xx-small', 'x-small', 'small', 'medium',  'large']
			},
			{
				'name' : 'title',
				'type' : 'String',
				'description' : 'Displays tooltip text when the mouse moves over the element.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'variant',
				'type' : 'String',
				'description' : 'The variant changes the appearance of a utility icon. Accepted variants include bare, warning and error.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','bare', 'warning', 'error']
			}

	],
	'nodes' : []
};