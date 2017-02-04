/**
 * 
 */
var lightningInputRichText = {
	'title' : 'lightning:inputRichText',
	'extras':'(Beta)',
	'description' : 'A WYSIWYG editor with a customizable toolbar for entering rich text.',
	"selected" : false,
	'attributes' : [
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
				'name' : 'disabled',
				'type' : 'Boolean',
				'description' : 'Specifies whether the editor is disabled. This value defaults to false.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
			},
			{
				'name' : 'disabledCategories',
				'type' : 'ArrayList',
				'description' : 'A comma-separated list of button categories to remove from the toolbar.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : true,
				'validValues' : ['','FORMAT_FONT','FORMAT_TEXT','FORMAT_BODY','ALIGN_TEXT','REMOVE_FORMATTING']
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
				'name' : 'placeholder',
				'type' : 'String',
				'description' : 'Text that is displayed when the field is empty.',
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
				'name' : 'valid',
				'type' : 'Boolean',
				'description' : 'Specifies whether the editor content is valid. If invalid, the slds-has-error class is added. This value defaults to true.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
			}, {
				'name' : 'value',
				'type' : 'String',
				'description' : 'The HTML content in the rich text editor.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			}

	],
	'nodes' : []
};