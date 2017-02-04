/**
 * 
 */
var auraStorageInit = {
	'title' : 'auraStorage:init',
	'description' : 'Initializes a storage instance using an adapter that satisfies the provided criteria.',
	"selected" : false,
	'attributes' : [ {
		'name' : 'clearStorageOnInit',
		'type' : 'Boolean',
		'description' : 'Set to true to delete all previous data on initialization (relevant for persistent storage only). This value defaults to true.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : ["","false","true"]
	}, {
		'name' : 'debugLoggingEnabled',
		'type' : 'Boolean',
		'description' : 'Set to true to enable debug logging with $A.log(). This value defaults to false.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : ["","false","true"]
	}, {
		'name' : 'defaultAutoRefreshInterval',
		'type' : 'Integer',
		'description' : 'The default duration (seconds) before an auto refresh request will be initiated. Actions may override this on a per-entry basis with Action.setStorable(). This value defaults to 30.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}, {
		'name' : 'defaultExpiration',
		'type' : 'Integer',
		'description' : 'The default duration (seconds) that an object will be retained in storage. Actions may override this on a per-entry basis with Action.setStorable(). This value defaults to 10.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}, {
		'name' : 'maxSize',
		'type' : 'Integer',
		'description' : 'Maximum size (KB) of the storage instance. Existing items will be evicted to make room for new items; algorithm is adapter-specific. This value defaults to 1000.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}, {
		'name' : 'name',
		'type' : 'String',
		'description' : 'The programmatic name for the storage instance.',
		'value' : '',
		'isRequired' : true,
		'isMultiValued' : false,
		'validValues' : []
	}, {
		'name' : 'persistent',
		'type' : 'Boolean',
		'description' : 'Set to true if this storage desires persistence. This value defaults to false.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : ["","false","true"]
	}, {
		'name' : 'secure',
		'type' : 'Boolean',
		'description' : 'Set to true if this storage requires secure storage support. This value defaults to false.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : ["","false","true"]
	}, {
		'name' : 'version',
		'type' : 'String',
		'description' : 'Version to associate with all stored items.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued' : false,
		'validValues' : []
	}

	],
	'nodes' : []
};