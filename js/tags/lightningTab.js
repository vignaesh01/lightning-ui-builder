/**
 * 
 */
var lightningTab = {
	'title' : 'lightning:tab',
	'extras' : '(Beta)',
	'description' : 'A single tab that is nested in a lightning:tabset component.',
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
				'name' : 'accesskey',
				'type' : 'String',
				'description' : 'Specifies a shortcut key to activate or focus an element.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},

			{
				'name' : 'id',
				'type' : 'String',
				'description' : 'The optional ID is used during tabset\'s onSelect event to determine which tab was clicked.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'label',
				'type' : 'Component[]',
				'description' : 'The text that appears in the tab.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'onblur',
				'type' : 'Action',
				'description' : 'The action triggered when the element releases focus.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'onfocus',
				'type' : 'Action',
				'description' : 'The action triggered when the element receives focus.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'tabindex',
				'type' : 'Integer',
				'description' : 'Specifies the tab order of an element (when the tab button is used for navigating).',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'title',
				'type' : 'String',
				'description' : 'The title displays when you hover over the tab. The title should describe the content of the tab for screen readers.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'onactive',
				'type' : 'Action',
				'description' : 'The action triggered when this tab becomes active.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			}

	],
	'nodes' : []
};