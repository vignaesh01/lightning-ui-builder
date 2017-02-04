/**
 * 
 */
var lightningInput = {
	'title' : 'lightning:input',
	'extras':'(Beta)',
	'description' : 'Represents interactive controls that accept user input depending on the type attribute.',
	"selected" : false,
	'attributes' : [
			{
				'name' : 'accept',
				'type' : 'String',
				'description' : 'Specifies the types of files that the server accepts. This attribute can be used only when type=\'file\'.',
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
				'name' : 'checked',
				'type' : 'Boolean',
				'description' : 'Specifies whether the checkbox is checked. This value defaults to false.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
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
				'name' : 'disabled',
				'type' : 'Boolean',
				'description' : 'Specifies that an input element should be disabled. This value defaults to false.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
			},
			{
				'name' : 'formatter',
				'type' : 'String',
				'description' : 'String value with the formatter to be used.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'label',
				'type' : 'String',
				'description' : 'Text label for the input.',
				'value' : '',
				'isRequired' : true,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'max',
				'type' : 'BigDecimal',
				'description' : 'Expected higher bound for the value in Floating-Point number',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'maxlength',
				'type' : 'Integer',
				'description' : 'The maximum number of characters allowed in the field.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'messageWhenBadInput',
				'type' : 'String',
				'description' : 'Error message to be displayed when a bad input is detected.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'messageWhenPatternMismatch',
				'type' : 'String',
				'description' : 'Error message to be displayed when a pattern mismatch is detected.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'messageWhenRangeOverflow',
				'type' : 'String',
				'description' : 'Error message to be displayed when a range overflow is detected.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'messageWhenRangeUnderflow',
				'type' : 'String',
				'description' : 'Error message to be displayed when a range underflow is detected.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'messageWhenStepMismatch',
				'type' : 'String',
				'description' : 'Error message to be displayed when a step mismatch is detected.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'messageWhenTooLong',
				'type' : 'String',
				'description' : 'Error message to be displayed when the value is too long.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'messageWhenTypeMismatch',
				'type' : 'String',
				'description' : 'Error message to be displayed when a type mismatch is detected.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'messageWhenValueMissing',
				'type' : 'String',
				'description' : 'Error message to be displayed when the value is missing.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'min',
				'type' : 'BigDecimal',
				'description' : 'Expected lower bound for the value in Floating-Point number',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'minlength',
				'type' : 'Integer',
				'description' : 'The minimum number of characters allowed in the field.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'multiple',
				'type' : 'Boolean',
				'description' : 'Specifies that a user can enter more than one value. This attribute can be used only when type=\'file\' or type=\'email\'.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
			},
			{
				'name' : 'name',
				'type' : 'String',
				'description' : 'Specifies the name of an input element.',
				'value' : '',
				'isRequired' : true,
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
				'name' : 'onchange',
				'type' : 'Action',
				'description' : 'The action triggered when a value attribute changes.',
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
				'name' : 'pattern',
				'type' : 'String',
				'description' : 'Specifies the regular expression that the input\'s value is checked against. This attributed is supported for text, date, search, url, tel, email, and password types.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'placeholder',
				'type' : 'String',
				'description' : 'Text that is displayed when the field is empty, to prompt the user for a valid entry.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'readonly',
				'type' : 'Boolean',
				'description' : 'Specifies that an input field is read-only. This value defaults to false.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
			},
			{
				'name' : 'required',
				'type' : 'Boolean',
				'description' : 'Specifies that an input field must be filled out before submitting the form. This value defaults to false.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
			},
			{
				'name' : 'step',
				'type' : 'Object',
				'description' : 'Granularity of the value in Positive Floating Point. Use \'any\' when granularity is not a concern.',
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
				'name' : 'type',
				'type' : 'String',
				'description' : 'The type of the input. This value defaults to text.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','Checkbox','Date','Datetime-local','Email','File','Month','Number','Password','Radio','Range','Search','Tel','Text','Time','Toggle','URL','Week']
			},
			{
				'name' : 'validity',
				'type' : 'Object',
				'description' : 'Represents the validity states that an element can be in, with respect to constraint validation.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			}, {
				'name' : 'value',
				'type' : 'Object',
				'description' : 'Specifies the value of an input element.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			}

	],
	'nodes' : []
};