/**
 * 
 */
var forceChatterPublisher = {
	'title' : 'forceChatter:publisher',
	'description' : 'Lets users create posts on records or groups, and upload attachments from any device.The forceChatter:publisher component is a standalone publisher component you can place on a record page.',
	"selected" : false,
	'attributes' : [
			{
				'name' : 'context',
				'type' : 'String',
				'description' : 'The context in which the component is being displayed (RECORD or GLOBAL). RECORD is for a record feed, and GLOBAL is for all other feed types. This attribute is case-sensitive.',
				'value' : '',
				'isRequired' : true,
				'isMultiValued' : false,
				'validValues' : ['RECORD','GLOBAL']
			}, {
				'name' : 'recordId',
				'type' : 'String',
				'description' : 'The record Id',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			}

	],
	'nodes' : []
};