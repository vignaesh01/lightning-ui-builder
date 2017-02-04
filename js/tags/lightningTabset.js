/**
 * 
 */
var lightningTabset = {
	'title' : 'lightning:tabset',
	'extras':'(Beta)',
	'description' : 'Represents a list of tabs.',
	"selected" : false,
	'attributes' : [
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
				'name' : 'onselect',
				'type' : 'Action',
				'description' : 'The action that will run when the tab is clicked.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'selectedTabId',
				'type' : 'String',
				'description' : 'Allows you to set a specific tab to open by default. If this attribute is not used, the first tab opens by default.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'variant',
				'type' : 'String',
				'description' : 'The variant changes the appearance of the tabset. Accepted variants are default and scoped.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','default' , 'scoped']
			}

	],
	'nodes' : []
};