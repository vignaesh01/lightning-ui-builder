/**
 * 
 */
var forceRecordPreview = {
	'title' : 'force:recordPreview',
	'extras':'(Developer Preview)',
	'description' : 'Use the force:recordPreview component to define the parameters for accessing, modifying, or creating a record using Lightning Data Service.',
	"selected" : false,
	'attributes' : [
			{
				'name' : 'fields',
				'type' : 'String[]',
				'description' : 'List of fields to query.This attribute or layoutType must be specified. If you specify both, the list of fields queried is the union of fields from fields and layoutType.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'ignoreExistingAction',
				'type' : 'Boolean',
				'description' : 'Whether to skip the cache and force a server request. Defaults to false.Setting this attribute to true is useful for handling user-triggered actions such as pull-to-refresh.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
			},
			{
				'name' : 'layoutType',
				'type' : 'String',
				'description' : 'Name of the layout to query, which determines the fields included. Valid values are the following.FULL,COMPACT.This attribute or fields must be specified. If you specify both, the list of fields queried is the union of fields from fields and layoutType.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : true,
				'validValues' : ['','FULL','COMPACT']
			},
			{
				'name' : 'mode',
				'type' : 'String',
				'description' : 'The mode in which to access the record. Valid values are the following.VIEW,EDIT.Defaults to VIEW.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','VIEW','EDIT']
			},
			{
				'name' : 'recordId',
				'type' : 'String',
				'description' : 'The 15-character or 18-character ID of the record to load, modify, or delete. Defaults to null, to create a record.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'targetError',
				'type' : 'String',
				'description' : 'A reference to a component attribute to which a localized error message is assigned if necessary.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'targetRecord',
				'type' : 'Record',
				'description' : 'A reference to a component attribute, to which the loaded record is assigned.Changes to the record are also assigned to this value, which triggers change handlers, re-renders, and so on.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'recordUpdated',
				'type' : 'Event',
				'description' : 'The event fired when the record is loaded, changed, updated, or removed.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			}

	],
	'nodes' : []
};