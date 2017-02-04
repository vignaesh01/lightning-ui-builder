/**
 * 
 */
var auraApplication = {
	'title' : 'aura:application',
	'description' : 'An app is a special top-level component whose markup is in a .app resource.',
	"selected" : false,
	'attributes' : [ {
		'name' : 'access',
		'type' : 'String',
		'description' : 'Indicates whether the app can be extended by another app outside of a namespace. Possible values are public (default), and global.',
		'value' : '',
		'isRequired' : false,
		'validValues' : ['','public','global']
	}, {
		'name' : 'controller',
		'type' : 'String',
		'description' : 'The server-side controller class for the app. The format is namespace.myController.',
		'value' : '',
		'isRequired' : false,
		'validValues' : []
	}, {
		'name' : 'description',
		'type' : 'String',
		'description' : 'A brief description of the app.',
		'value' : '',
		'isRequired' : false,
		'validValues' : []
	}, {
		'name' : 'extends',
		'type' : 'Component',
		'description' : 'The app to be extended, if applicable. For example, extends="namespace:yourApp".',
		'value' : '',
		'isRequired' : false,
		'validValues' : []
	}, {
		'name' : 'extensible',
		'type' : 'Boolean',
		'description' : 'Indicates whether the app is extensible by another app. Defaults to false.',
		'value' : '',
		'isRequired' : false,
		'validValues' : []
	}, {
		'name' : 'implements',
		'type' : 'Component',
		'description' : 'The name of the template used to bootstrap the loading of the framework and the app. The default value is aura:template. You can customize the template by creating your own component that extends the default template. For example:'
						+'<aura:component extends="aura:template" ... >',
		'value' : '',
		'isRequired' : false,
		'validValues' : []
	}, {
		'name' : 'tokens',
		'type' : 'String',
		'description' : 'A comma-separated list of tokens bundles for the application. For example, tokens="ns:myAppTokens". Tokens make it easy to ensure that your design is consistent, and even easier to update it as your design evolves. Define the token values once and reuse them throughout your application.',
		'value' : '',
		'isRequired' : false,
		'validValues' : []
	}, {
		'name' : 'useAppcache',
		'type' : 'Boolean',
		'description' : 'Specifies whether to use the application cache. Valid options are true or false. Defaults to false.',
		'value' : '',
		'isRequired' : false,
		'validValues' : ['','false','true']
	}, {
		'name' : 'body',
		'type' : 'Component[]',
		'description' : 'The body of the app. In markup, this is everything in the body of the tag.',
		'value' : '',
		'isRequired' : false,
		'validValues' : []
	}

	],
	'nodes' : []
};