/**
 * 
 */
var forceCommunityRouteLink = {
	'title' : 'forceCommunity:routeLink',
	'description' : 'Sets an HTML anchor tag with an href attribute that’s automatically generated from the provided record ID. Use it to improve SEO link equity in template-based communities.',
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
				'description' : 'A CSS class for the anchor tag.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'id',
				'type' : 'String',
				'description' : 'The ID of the anchor tag.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'label',
				'type' : 'String',
				'description' : 'The text displayed in the link.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'onClick',
				'type' : 'Action',
				'description' : 'Action to trigger when the anchor is clicked.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'routeInput',
				'type' : 'HashMap',
				'description' : 'The map of dynamic parameters that create the link. Only recordId-based routes are supported.',
				'value' : '',
				'isRequired' : true,
				'isMultiValued' : false,
				'validValues' : []
			}, {
				'name' : 'title',
				'type' : 'String',
				'description' : 'The text to display for the link tooltip.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			}

	],
	'nodes' : []
};
