/**
 * 
 */
var lightningFormattedNumber = {
	'title' : 'lightning:formattedNumber',
	'extras':'(Beta)',
	'description' : 'Displays formatted numbers for decimals, currency, and percentages.',
	"selected" : false,
	'attributes' : [
			
			{
				'name' : 'currencyCode',
				'type' : 'String',
				'description' : 'Only used if style=\'currency\', this attribute determines which currency is displayed. Possible values are the ISO 4217 currency codes, such as \'USD\' for the US dollar.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'currencyDisplayAs',
				'type' : 'String',
				'description' : 'Determines how currency is displayed. Possible values are symbol, code, and name. This value defaults to symbol.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','symbol', 'code', 'name']
			},
			{
				'name' : 'maximumFractionDigits',
				'type' : 'Integer',
				'description' : 'The maximum number of fraction digits that are allowed.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'maximumSignificantDigits',
				'type' : 'Integer',
				'description' : 'The maximum number of significant digits that are allowed. Possible values are from 1 to 21.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21']
			},
			{
				'name' : 'minimumFractionDigits',
				'type' : 'Integer',
				'description' : 'The minimum number of fraction digits that are required.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : []
			},
			{
				'name' : 'minimumIntegerDigits',
				'type' : 'Integer',
				'description' : 'The minimum number of integer digits that are required. Possible values are from 1 to 21.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21']
			},
			{
				'name' : 'minimumSignificantDigits',
				'type' : 'Integer',
				'description' : 'The minimum number of significant digits that are required. Possible values are from 1 to 21.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21']
			},
			{
				'name' : 'style',
				'type' : 'String',
				'description' : 'The number formatting style to use. Possible values are decimal, currency, and percent. This value defaults to decimal.',
				'value' : '',
				'isRequired' : false,
				'isMultiValued' : false,
				'validValues' : ['','decimal', 'currency',  'percent']
			}, {
				'name' : 'value',
				'type' : 'BigDecimal',
				'description' : 'The value to be formatted.',
				'value' : '',
				'isRequired' : true,
				'isMultiValued' : false,
				'validValues' : []
			}

	],
	'nodes' : []
};