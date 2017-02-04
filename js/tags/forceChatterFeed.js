/**
 * 
 */
var forceChatterFeed = {
	'title' : 'forceChatter:feed',
	'description' : 'Represents a Chatter feed.A forceChatter:feed component represents a feed that\'s specified by its type.',
	"selected" : false,
	'attributes' : [
			{
				'name' : 'feedDesign',
				'type' : 'String',
				'description' : 'Valid values include DEFAULT ( shows inline comments on desktop, a bit more detail ) or BROWSE ( primarily an overview of the feed items )',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','DEFAULT ','BROWSE ']
			},
			{
				'name' : 'subjectId',
				'type' : 'String',
				'description' : 'For most feeds tied to an entity, this is used specified the desired entity. Defaults to the current user if not specified',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'type',
				'type' : 'String',
				'description' : 'The strategy used to find items associated with the subject. Valid values include: News, Home, Record, To.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','News', 'Home', 'Record', 'To']
			}

	],
	'nodes' : []
};