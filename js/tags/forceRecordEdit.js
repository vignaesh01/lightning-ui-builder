/**
 * 
 */
var forceRecordEdit = {
	'title' : 'force:recordEdit',
	'description' : 'Generates an editable view of the specified Salesforce record.',
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
				'name' : 'recordId',
				'type' : 'String',
				'description' : 'The Id of the record to load, optional if record attribute is specified.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'recordSave',
				'type' : 'Event',
				'description' : 'User fired event to indicate request to save the record.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			}, {
				'name' : 'onSaveSuccess',
				'type' : 'Event',
				'description' : 'Fired when record saving was successful.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			}

	],
	'nodes' : []
};