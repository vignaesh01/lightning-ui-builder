/**
 * 
 */
var forceChatterFullFeed = {
	'title' : 'forceChatter:fullFeed',
	'description' : 'A Chatter feed that is full length',
	"selected" : false,
	'attributes' : [
			{
				'name' : 'handleNavigationEvents',
				'type' : 'Boolean',
				'description' : 'Determines whether the component can handle navigation events for entities and URLs. If set to true then navigation events occur in the entity or URL being opened in a new window.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
			},
			{
				'name' : 'subjectId',
				'type' : 'String',
				'description' : 'For most feeds tied to an entity, this attribute is used to specify the desired entity. Defaults to the current user if not specified',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'type',
				'type' : 'String',
				'description' : 'This attribute is used to find items associated with the subject. Valid values include: News, Home, Record, To.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','News', 'Home', 'Record', 'To']
			}

	],
	'nodes' : []
};