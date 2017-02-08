/**
 * 
 */

var app = angular.module('lcbApp', [ 'ui.tree', 'ui.bootstrap' ]);
app.controller('lcbController', function($scope, lcbHelper) {

	$scope.removeNode = function(scope) {
		scope.remove();
	};

	$scope.visible = function(item) {
		return !($scope.query && $scope.query.length > 0 && item.title
				.toUpperCase().indexOf($scope.query.toUpperCase()) == -1);

	};

	$scope.isPropVisible = function(item) {
		return !($scope.queryProp && $scope.queryProp.length > 0 && item.name
				.toUpperCase().indexOf($scope.queryProp.toUpperCase()) == -1);
	}

	$scope.toggle = function(scope) {
		scope.toggle();
	};

	/*$scope.newSubItem = function(scope) {
		var nodeData = scope.$modelValue;
		nodeData.nodes.push({
			id : nodeData.id * 10 + nodeData.nodes.length,
			title : nodeData.title + '.' + (nodeData.nodes.length + 1),
			nodes : []
		});
	};*/

	$scope.setProperties = function(node) {
		var nodeData = node.$modelValue;
		$scope.attributes = nodeData.attributes;
		$scope.tagName = nodeData.title;
		// lcbHelper.toggleSelection(nodeData,$scope.tree2);

		lcbHelper.deselectTheTree($scope.tree2);
		nodeData.selected = true;
	};

	$scope.clearProperties = function() {
		$scope.attributes = [];
		$scope.tagName = "";
	}

	$scope.tree1 = [ auraComponent, auraApplication, auraAttribute,
			auraDependency, auraEvent, auraInterface, auraMethod, auraSet,
			auraHtml, auraIf, auraIteration, auraTemplate, auraText,
			auraUnescapedHtml, auraStorageInit, forceCanvasApp,
			forceInputField, forceOutputField, forceRecordEdit,
			forceRecordPreview, forceRecordView, forceChatterFeed,
			forceChatterFullFeed, forceChatterPublisher,
			forceCommunityRouteLink, lightningAvatar, lightningBadge,
			lightningButton, lightningButtonGroup, lightningButtonIcon,
			lightningButtonMenu, lightningCard, lightningContainer,
			lightningFormattedDateTime, lightningFormattedNumber,
			lightningIcon, lightningInput, lightningInputRichText,
			lightningLayout, lightningLayoutItem, lightningMenuItem,
			lightningSelect, lightningSpinner, lightningTab, lightningTabset,
			lightningTextarea, ltngRequire, uiActionMenuItem, uiButton,
			uiCheckboxMenuItem, uiInputCheckbox, uiInputCurrency, uiInputDate,
			uiInputDateTime, uiInputDefaultError, uiInputEmail, uiInputNumber,
			uiInputPhone, uiInputRadio, uiInputRichText, uiInputSecret,
			uiInputSelect, uiInputSelectOption, uiInputText, uiInputTextArea,
			uiInputURL, uiMenu, uiMenuItem, uiMenuItemSeparator, uiMenuList,
			uiMenuTrigger, uiMenuTriggerLink, uiMessage, uiOutputCheckbox,
			uiOutputCurrency, uiOutputDate, uiOutputDateTime, uiOutputEmail,
			uiOutputNumber, uiOutputPhone, uiOutputRichText, uiOutputText,
			uiOutputTextArea, uiOutputURL, uiRadioMenuItem, uiScrollerWrapper,
			uiSpinner ];

	$scope.tree2 = [];

	$scope.treeOptions = {
		dropped : function(e) {
			var nodeData = e.source.nodeScope.$modelValue;
			$scope.attributes = nodeData.attributes;
			$scope.tagName = nodeData.title;
			
			lcbHelper.deselectTheTree($scope.tree2);
			nodeData.selected = true;
			console.log(nodeData.attributes);
		}
	};

	$scope.tagTreeOptions = {
	/*
	 * dropped : function(e) { var nodeData = e.source.nodeScope.$modelValue;
	 * $scope.attributes=nodeData.attributes; console.log(nodeData.attributes); }
	 */
	};

	$scope.sourceCode = '';
	$scope.showSourceCode = function() {
		$scope.sourceCode = lcbHelper.getCode($scope.tree2);
	}

});

app.service('lcbHelper', function() {
	var code = '';
	this.generateCode = function(compArr,indent) {

		if (!compArr || compArr.length == 0) {
			return;
		}

		for (var i = 0; i < compArr.length; i++) {
			var startTag = indent+'<' + compArr[i].title;

			if (compArr[i].attributes) {
				for (var a = 0; a < compArr[i].attributes.length; a++) {
					var attr = compArr[i].attributes[a];

					if (attr.value) {
						if (this.isArray(attr.value)) {
							startTag += ' ' + attr.name + '="'
									+ attr.value.toString() + '" ';
						} else if (this.isString(attr.value)
								&& attr.value.trim().length > 0) {
							startTag += ' ' + attr.name + '="'
									+ attr.value.trim() + '" ';
						}

					}

				}
			}			

			startTag += '>';
			code += startTag;
			code += '\n';

			this.generateCode(compArr[i].nodes,indent+"\t");
			code += indent+'</' + compArr[i].title + '>';
			code += '\n';
		}
	},

	this.getCode = function(compArr) {
		code = '';
		this.generateCode(compArr,"");
		return code;
	}, this.deselectTheTree = function(compArr) {

		if (!compArr || compArr.length == 0) {
			return;
		}

		for (var i = 0; i < compArr.length; i++) {

			compArr[i].selected = false;

			this.deselectTheTree(compArr[i].nodes);
		}

	},
			this.isArray = function(myArray) {
				return (myArray && myArray.constructor.toString().indexOf(
						"Array") > -1);
			}, this.isString = function(myString) {
				return (myString && myString.constructor.toString().indexOf(
						"String") > -1);
			}

});
