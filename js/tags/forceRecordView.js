/**
 * 
 */
var forceRecordView = {
	'title' : 'force:recordView',
	'description' : 'Generates a view of the specified Salesforce record.',
	"selected" : false,
	'attributes' : [
			{
				'name' : 'record',
				'type' : 'SObjectRow',
				'description' : 'The record (SObject) to load, optional if recordId attribute is specified.',
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
				'name' : 'type',
				'type' : 'String',
				'description' : 'The type of layout to use to display the record. Possible values: FULL, MINI. The default is FULL.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','FULL', 'MINI']
			}

	],
	'nodes' : []
};