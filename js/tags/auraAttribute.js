/**
 * 
 */
var auraAttribute = {
	'title' : 'aura:attribute',
	'description' : 'aura:attribute describes an attribute available on an app, interface, component, or event.',
	"selected" : false,
	'attributes' : [ {
		'name' : 'access',
		'type' : 'String',
		'description' : 'Indicates whether the attribute can be used outside of its own namespace. Possible values are public (default), and global, and private.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued':false,
		'validValues' : ["","public","global","private"]
	}, {
		'name' : 'name',
		'type' : 'String',
		'description' : 'Required. The name of the attribute. For example, if you set <aura:attribute name="isTrue" type="Boolean" /> on a component called aura:newCmp, you can set this attribute when you instantiate the component; for example,<aura:newCmp isTrue="false" />.',
		'value' : '',
		'isRequired' : true,
		'isMultiValued':false,
		'validValues' : []
	}, {
		'name' : 'type',
		'type' : 'String',
		'description' : 'Required. The type of the attribute',
		'value' : '',
		'isRequired' : true,
		'isMultiValued':false,
		'validValues' : []
	}, {
		'name' : 'default',
		'type' : 'String',
		'description' : 'The default value for the attribute, which can be overwritten as needed. When setting a default value, expressions using the $Label, $Locale, and $Browser global value providers are supported. Alternatively, to set a dynamic default, use an init event.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued':false,
		'validValues' : []
	}, {
		'name' : 'required',
		'type' : 'Boolean',
		'description' : 'Determines if the attribute is required. The default is false.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued':false,
		'validValues' : ["","false","true"]
	},{
		'name' : 'description',
		'type' : 'String',
		'description' : 'A summary of the attribute and its usage.',
		'value' : '',
		'isRequired' : false,
		'isMultiValued':false,
		'validValues' : []
	}


	],
	'nodes' : []
};