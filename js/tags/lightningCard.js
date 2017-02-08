/**
 * 
 */
var lightningCard = {
	'title' : 'lightning:card',
	'description' : 'A lightning:card is used to apply a stylized container around a grouping of information. The information could be a single item or a group of items such as a related list.',
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
				'name' : 'actions',
				'type' : 'Component[]',
				'description' : 'Actions are components such as button or buttonIcon. Actions are displayed in the header.',
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
				'name' : 'footer',
				'type' : 'Component[]',
				'description' : 'The footer can include text or another component',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'iconName',
				'type' : 'String',
				'description' : 'The Lightning Design System name of the icon. Names are written in the format \'\\utility:down\\\' where \'utility\' is the category, and \'down\' is the specific icon to be displayed. The icon is displayed in the header to the left of the title.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'title',
				'type' : 'Component[]',
				'description' : 'The title can include text or another component, and is displayed in the header.',
				'value' : '',
				'isRequired' : true,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'variant',
				'type' : 'String',
				'description' : 'The variant changes the appearance of the card. Accepted variants include base or narrow. This value defaults to base.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'base', 'narrow' ]
			}

	],
	'nodes' : []
};