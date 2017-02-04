/**
 * 
 */
var lightningFormattedDateTime = {
	'title' : 'lightning:formattedDateTime',
	'extras':'(Beta)',
	'description' : 'A lightning:formattedDateTime component displays formatted date and time.',
	"selected" : false,
	'attributes' : [
			
			{
				'name' : 'day',
				'type' : 'String',
				'description' : 'Allowed values are numeric or 2-digit.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','numeric', '2-digit']
			},
			{
				'name' : 'era',
				'type' : 'String',
				'description' : 'Allowed values are narrow, short, or long.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','narrow', 'short', 'long']
			},
			{
				'name' : 'hour',
				'type' : 'String',
				'description' : 'Allowed values are numeric or 2-digit.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','numeric', '2-digit']
			},
			{
				'name' : 'hour12',
				'type' : 'Boolean',
				'description' : 'Determines whether time is displayed as 12-hour. If false, time displays as 24-hour. The default setting is determined by the user\'s locale.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : [ '', 'false', 'true' ]
			},
			{
				'name' : 'minute',
				'type' : 'String',
				'description' : 'Allowed values are numeric or 2-digit.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','numeric', '2-digit']
			},
			{
				'name' : 'month',
				'type' : 'String',
				'description' : 'Allowed values are 2-digit, narrow, short, or long.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','2-digit','narrow', 'short', 'long']
			},
			{
				'name' : 'second',
				'type' : 'String',
				'description' : 'Allowed values are numeric or 2-digit.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','numeric', '2-digit']
			},
			{
				'name' : 'timeZone',
				'type' : 'String',
				'description' : 'The time zone to use. Implementations can include any time zone listed in the IANA time zone database. The default is the runtime\'s default time zone. Use this attribute only if you want to override the default time zone.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'timeZoneName',
				'type' : 'String',
				'description' : 'Allowed values are short or long. For example, the Pacific Time zone would display as \'PST\' if you select \'short\', or \'Pacific Standard Time\' if you select \'long.\'',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','short','long']
			},
			{
				'name' : 'value',
				'type' : 'Object',
				'description' : 'The value to be formatted, which can be a Date object or timestamp.',
				'value' : '',
				'isRequired' : true,
				'isMultiValued' : false,
				'validValues' : []
			}, {
				'name' : 'weekday',
				'type' : 'String',
				'description' : 'Allowed values are narrow, short, or long.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','narrow', 'short', 'long']
			}, {
				'name' : 'year',
				'type' : 'String',
				'description' : 'Allowed values are numeric or 2-digit.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','numeric', '2-digit']
			}

	],
	'nodes' : []
};