/**
 * 
 */
var uiInputRichText = {
	'title' : 'ui:inputRichText',
	'description' : 'An input field for entering rich text.',
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
				'description' : 'A CSS style to be attached to the component. This style is added in addition to base styles output by the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'cols',
				'type' : 'Integer',
				'description' : 'The width of the text area, which is defined by the number of characters to display in a single row at a time. Default value is 20.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'disabled',
				'type' : 'Boolean',
				'description' : 'Specifies whether the component should be displayed in a disabled state. Default value is ""false"".',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
			},
			{
				'name' : 'errors',
				'type' : 'ArrayList',
				'description' : 'The list of errors to be displayed.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'height',
				'type' : 'String',
				'description' : 'The height of the editing area (that includes the editor content). This can be an integer, for pixel sizes, or any CSS-defined length unit.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'label',
				'type' : 'String',
				'description' : 'The text of the label component',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'labelClass',
				'type' : 'String',
				'description' : 'The CSS class of the label component',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'maxlength',
				'type' : 'Integer',
				'description' : 'The maximum number of characters that can be typed into the input field. Corresponds to the maxlength attribute of the rendered HTML textarea element.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'placeholder',
				'type' : 'String',
				'description' : 'The text that is displayed by default.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'readonly',
				'type' : 'Boolean',
				'description' : 'Specifies whether the text area should be rendered as read-only. Default value is false.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
			},
			{
				'name' : 'required',
				'type' : 'Boolean',
				'description' : 'Specifies whether the input is required. Default value is ""false"".',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
			},
			{
				'name' : 'requiredIndicatorClass',
				'type' : 'String',
				'description' : 'The CSS class of the required indicator component',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'resizable',
				'type' : 'Boolean',
				'description' : 'Specifies whether or not the textarea should be resizable. Defaults to true.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
			},
			{
				'name' : 'rows',
				'type' : 'Integer',
				'description' : 'The height of the text area, which is defined by the number of rows to display at a time. Default value is 2.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'updateOn',
				'type' : 'String',
				'description' : 'Updates the component\'s value binding if the updateOn attribute is set to the handled event. Default value is ""change"".',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'value',
				'type' : 'String',
				'description' : 'The value currently in the input field.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'width',
				'type' : 'String',
				'description' : 'The editor UI outer width. This can be an integer, for pixel sizes, or any CSS-defined unit. If isRichText is set to false, use the cols attribute instead.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'dblclick',
				'type' : 'Event',
				'description' : 'The event fired when the user double-clicks the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'mouseover',
				'type' : 'Event',
				'description' : 'The event fired when the user moves the mouse pointer over the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'mouseout',
				'type' : 'Event',
				'description' : 'The event fired when the user moves the mouse pointer away from the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'mouseup',
				'type' : 'Event',
				'description' : 'The event fired when the user releases the mouse button over the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'mousemove',
				'type' : 'Event',
				'description' : 'The event fired when the user moves the mouse pointer over the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'click',
				'type' : 'Event',
				'description' : 'The event fired when the user clicks on the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'mousedown',
				'type' : 'Event',
				'description' : 'The event fired when the user clicks a mouse button over the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'select',
				'type' : 'Event',
				'description' : 'The event fired when the user selects some text.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'blur',
				'type' : 'Event',
				'description' : 'The event fired when the user moves off from the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'focus',
				'type' : 'Event',
				'description' : 'The event fired when the user focuses on the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'keypress',
				'type' : 'Event',
				'description' : 'The event fired when the user presses or holds down a keyboard key on the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'keyup',
				'type' : 'Event',
				'description' : 'The event fired when the user releases a keyboard key on the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'keydown',
				'type' : 'Event',
				'description' : 'The event fired when the user presses a keyboard key on the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'cut',
				'type' : 'Event',
				'description' : 'The event fired when the user cuts content to the clipboard.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'onError',
				'type' : 'Event',
				'description' : 'The event fired when there are any validation errors on the component.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'onClearErrors',
				'type' : 'Event',
				'description' : 'The event fired when any validation errors should be cleared.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'change',
				'type' : 'Event',
				'description' : 'The event fired when the user changes the content of the input.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'copy',
				'type' : 'Event',
				'description' : 'The event fired when the user copies content to the clipboard.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'paste',
				'type' : 'Event',
				'description' : 'The event fired when the user pastes content from the clipboard.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			}

	],
	'nodes' : []
};