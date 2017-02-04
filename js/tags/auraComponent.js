/**
 * 
 */
var auraComponent={
        'title': 'aura:component',
        'description':'The root of the component hierarchy. Provides a default rendering implementation.',
        "selected":false,
        'attributes':[
                      {
                    	  'name':'access',
                    	  'type':'String',
                    	  'description':'Indicates whether the component can be used outside of its own namespace. Possible values are public (default), and global.',
                    	  'value':'',
                    	  'isRequired':false,
                    	  'isMultiValued':false,
                    	  'validValues':['','public','global']
                    	  
                      },
                      {
                    	  'name':'controller',
                    	  'type':'String',
                    	  'description':'The server-side controller class for the component. The format is namespace.myController.',
                    	  'value':'',
                    	  'isRequired':false,
                    	  'isMultiValued':false,
                    	  'validValues':[]
                      },
                      {
                    	  'name':'description',
                    	  'type':'String',
                    	  'description':'A description of the component.',
                    	  'value':'',
                    	  'isRequired':false,
                    	  'isMultiValued':false,
                    	  'validValues':[]
                      },
                      {
                    	  'name':'extends',
                    	  'type':'Component',
                    	  'description':'The component to be extended.',
                    	  'value':'',
                    	  'isRequired':false,
                    	  'isMultiValued':false,
                    	  'validValues':[]
                      },
                      {
                    	  'name':'extensible',
                    	  'type':'Boolean',
                    	  'description':'Set to true if the component can be extended. The default is false.',
                    	  'value':'',
                    	  'isRequired':false,
                    	  'isMultiValued':false,
                    	  'validValues':['','false','true']
                      },
                      {
                    	  'name':'implements',
                    	  'type':'String',
                    	  'description':'A comma-separated list of interfaces that the component implements.',
                    	  'value':'',
                    	  'isRequired':false,
                    	  'isMultiValued':true,
                    	  'validValues':['clients:hasEventContext','clients:hasItemContext','flexipage:availableForAllPageTypes','flexipage:availableForRecordHome','forceCommunity:availableForAllPageTypes','force:appHostable','force:hasRecordId','force:hasSObjectName','force:lightningQuickAction','force:lightningQuickActionWithoutHeader','ltng:allowGuestAccess']
                      },
                      {
                    	  'name':'isTemplate',
                    	  'type':'Boolean',
                    	  'description':'Set to true if the component is a template. The default is false. A template must have isTemplate="true" set in its <aura:component> tag. <aura:component isTemplate="true" extends="aura:template">',
                    	  'value':'',
                    	  'isRequired':false,
                    	  'isMultiValued':false,
                    	  'validValues':['','public','global']
                      },
                      {
                    	  'name':'template',
                    	  'type':'Component',
                    	  'description':'The template for this component. A template bootstraps loading of the framework and app. The default template is aura:template. You can customize the template by creating your own component that extends the default template.'
                    		  			+'For example:'
                    		  			+'<aura:component extends="aura:template" ... >',
                    	  'value':'',
                    	  'isRequired':false,
                    	  'isMultiValued':false,
                    	  'validValues':[]
                      },
                      {
                    	  'name':'body',
                    	  'type':'Component[]',
                    	  'description':'The body of the component. In markup, this is everything in the body of the tag.',
                    	  'value':'',
                    	  'isRequired':false,
                    	  'isMultiValued':false,
                    	  'validValues':[]
                      }
                      ],
        'nodes': []
      };
