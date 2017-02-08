/**
 * 
 */
var forceCanvasApp = {
	'title' : 'force:canvasApp',
	'description' : 'Enables you to include a Force.com Canvas app in a Lightning component.',
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
				'name' : 'applicationName',
				'type' : 'String',
				'description' : 'Name of the canvas app. Either applicationName or developerName is required.',
				'value' : '',
				'isRequired' : true,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'border',
				'type' : 'String',
				'description' : 'Width of the canvas app border, in pixels. If not specified, defaults to 0 px.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'canvasId',
				'type' : 'String',
				'description' : 'An unique label within a page for the Canvas app window. This should be used when targeting events to this canvas app.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'containerId',
				'type' : 'String',
				'description' : 'An html element id in which canvas app is rendered. The container needs to be defined before canvasApp cmp usage.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'developerName',
				'type' : 'String',
				'description' : 'Developer name of the canvas app. This name is defined when the canvas app is created and can be viewed in the Canvas App Previewer. Either developerName or applicationName is required.',
				'value' : '',
				'isRequired' : true,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'displayLocation',
				'type' : 'String',
				'description' : 'The location in the application where the canvas app is currently being called from.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'height',
				'type' : 'String',
				'description' : 'Canvas app window height, in pixels. If not specified, defaults to 900 px.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'maxHeight',
				'type' : 'String',
				'description' : 'The maximum height of the Canvas app window in pixels. Defaults to 2000 px; \'infinite\' is also a valid value.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'maxWidth',
				'type' : 'String',
				'description' : 'The maximum width of the Canvas app window in pixels. Defaults to 1000 px; \'infinite\' is also a valid value.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'namespacePrefix',
				'type' : 'String',
				'description' : 'Namespace value of the Developer Edition organization in which the canvas app was created. Optional if the canvas app wasn\’t created in a Developer Edition organization. If not specified, defaults to null.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'onCanvasAppError',
				'type' : 'String',
				'description' : 'Name of the JavaScript function to be called if the canvas app fails to render.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'onCanvasAppLoad',
				'type' : 'String',
				'description' : 'Name of the JavaScript function to be called after the canvas app loads.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'onCanvasSubscribed',
				'type' : 'String',
				'description' : 'Name of the JavaScript function to be called after the canvas app registers with the parent.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'parameters',
				'type' : 'String',
				'description' : 'Object representation of parameters passed to the canvas app. This should be supplied in JSON format or as a JavaScript object literal. Here’s an example of parameters in a JavaScript object literal: {param1:\'value1\',param2:\'value2\'}. If not specified, defaults to null.	',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'referenceId',
				'type' : 'String',
				'description' : 'The reference id of the canvas app, if set this is used instead of developerName, applicationName and namespacePrefix',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'scrolling',
				'type' : 'String',
				'description' : 'Canvas window scrolling',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'sublocation',
				'type' : 'String',
				'description' : 'The sublocation is the location in the application where the canvas app is currently being called from, for ex, displayLocation can be PageLayout and sublocation can be S1MobileCardPreview or S1MobileCardFullview, etc',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'title',
				'type' : 'String',
				'description' : 'Title for the link',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'watermark',
				'type' : 'Boolean',
				'description' : 'Renders a link if set to true',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ "", "false", "true" ]
			},
			{
				'name' : 'width',
				'type' : 'String',
				'description' : 'Canvas app window width, in pixels. If not specified, defaults to 800 px.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			}

	],
	'nodes' : []
};