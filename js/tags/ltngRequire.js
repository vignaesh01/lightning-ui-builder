/**
 * 
 */
var ltngRequire = {
	'title' : 'ltng:require',
	'description' : 'Loads scripts and stylesheets while maintaining dependency order. ',
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
				'name' : 'scripts',
				'type' : 'String[]',
				'description' : 'The set of scripts in dependency order that will be loaded.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'styles',
				'type' : 'String[]',
				'description' : 'The set of style sheets in dependency order that will be loaded.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'afterScriptsLoaded',
				'type' : 'Event',
				'description' : 'Fired when ltng:require has loaded all scripts listed in ltng:require.scripts',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'beforeLoadingResources',
				'type' : 'Event',
				'description' : 'Fired before ltng:require starts loading resources',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			}

	],
	'nodes' : []
};