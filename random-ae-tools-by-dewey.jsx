"object"!=typeof JSON&&(JSON={}),function(){"use strict";var gap,indent,meta,rep,rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;function f(t){return t<10?"0"+t:t}function this_value(){return this.valueOf()}function quote(t){return rx_escapable.lastIndex=0,rx_escapable.test(t)?'"'+t.replace(rx_escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var n,o,f,u,r,$=gap,i=e[t];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(t)),"function"==typeof rep&&(i=rep.call(e,t,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,r=[],"[object Array]"===Object.prototype.toString.apply(i)){for(n=0,u=i.length;n<u;n+=1)r[n]=str(n,i)||"null";return f=0===r.length?"[]":gap?"[\n"+gap+r.join(",\n"+gap)+"\n"+$+"]":"["+r.join(",")+"]",gap=$,f}if(rep&&"object"==typeof rep)for(n=0,u=rep.length;n<u;n+=1)"string"==typeof rep[n]&&(f=str(o=rep[n],i))&&r.push(quote(o)+(gap?": ":":")+f);else for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(f=str(o,i))&&r.push(quote(o)+(gap?": ":":")+f);return f=0===r.length?"{}":gap?"{\n"+gap+r.join(",\n"+gap)+"\n"+$+"}":"{"+r.join(",")+"}",gap=$,f}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value),"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,n){var o;if(gap="",indent="","number"==typeof n)for(o=0;o<n;o+=1)indent+=" ";else"string"==typeof n&&(indent=n);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){var j;function walk(t,e){var n,o,f=t[e];if(f&&"object"==typeof f)for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(void 0!==(o=walk(f,n))?f[n]=o:delete f[n]);return reviver.call(t,e,f)}if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw SyntaxError("JSON.parse")})}();

var scriptName = "random-ae-tools-by-david";
var scriptNameS = "random-ae-tools-by-david-scriptFolder"
var filePathVarCheck = "filepath";
var filePathVarCheckS = "filepathS";
var groupGroup = [];
var scriptsFolderG;

var thisObj = this instanceof Panel ? this : null;

var panel =
  thisObj instanceof Panel
    ? thisObj
    : new Window("palette", "random-ae-tools-by-dewey", undefined, {
        resizeable: true,
        closeButton: true,
      });

// PANEL
// =====
var tpanel = panel.add("tabbedpanel", undefined, undefined);
tpanel.alignChildren = "fill";
tpanel.margins = 0;

// EXPRESSION HELPER TAB - TAB 01
// ================================================================
var tab1 = tpanel.add("tab", undefined, undefined);
tab1.text = "Expression Loader";
tab1.orientation = "column";
tab1.alignChildren = ["left", "top"];
tab1.spacing = 10;
tab1.margins = 10;

var headerG = tab1.add("group", undefined);
headerG.orientation = "row";
headerG.alignChildren = ["left", "center"];
headerG.spacing = 10;
headerG.margins = 0;

// EXPRESSIONPANEL
// ===============
var expressionpanel = tab1.add("panel", undefined, undefined);
expressionpanel.text = "Expressions";
expressionpanel.preferredSize.width = 400;
expressionpanel.orientation = "column";
expressionpanel.alignChildren = ["center", "center"];
expressionpanel.spacing = 10;
expressionpanel.margins = 10;

// LOAD FILE - GROUP
// ======================

var loadPanel = tab1.add("panel", undefined, undefined);
loadPanel.text = "Load file";
loadPanel.preferredSize.width = 400;
loadPanel.orientation = "column";
loadPanel.alignChildren = ["center", "center"];
loadPanel.spacing = 10;
loadPanel.margins = 10;

var loadGroup = loadPanel.add("group", undefined);
loadGroup.orientation = "row";
loadGroup.alignChildren = ["center", "center"];
loadGroup.spacing = 10;
loadGroup.margins = 0;

var filepathText = loadGroup.add("statictext", undefined, undefined);
filepathText.preferredSize.width = 200;

var loadButton = loadGroup.add("button", undefined, undefined);
loadButton.text = "Load expressions";

var reloadButton = loadGroup.add("button", undefined, undefined);
reloadButton.text = "Reload";

// LOAD BUTTON
loadButton.onClick = function () {
  // Open a file dialog to select a file
  var fileSetting = File.openDialog("Select a file:");
  if (fileSetting == null) {
    //  alert("File open cancelled")
  } else {
    app.settings.saveSetting(scriptName, filePathVarCheck, fileSetting.fsName);
    emptygroupGroup();
    loadData(fileSetting);
  }
};

reloadButton.onClick = function () {
  var fileSetting = app.settings.getSetting(scriptName, filePathVarCheck);
  emptygroupGroup();
  loadData(fileSetting);
};

// TOOL TAB - TAB 02
// ================================================================

var tab2 = tpanel.add("tab", undefined, undefined);
tab2.text = "Tools";
tab2.orientation = "row";
tab2.alignChildren = ["left", "top"];
tab2.spacing = 10;
tab2.margins = 10;

// TOOL TAB - TAB 02
// ================================================================

var tab3 = tpanel.add("tab", undefined, undefined);
tab3.text = "Script Loader";
tab3.orientation = "column";
tab3.alignChildren = ["center", "top"];
tab3.spacing = 10;
tab3.margins = 10;

var scriptPanel = tab3.add("panel", undefined, undefined, {name: "scriptPanel"}); 
    scriptPanel.orientation = "column"; 
    scriptPanel.alignChildren = ["left","top"]; 
    scriptPanel.spacing = 10; 
    scriptPanel.margins = 10; 

var loadPanelS = tab3.add("panel", undefined, undefined);
loadPanelS.text = "Load file";
loadPanelS.preferredSize.width = 400;
loadPanelS.orientation = "column";
loadPanelS.alignChildren = ["center", "center"];
loadPanelS.spacing = 10;
loadPanelS.margins = 10;

var loadGroupS = loadPanelS.add("group", undefined);
loadGroupS.orientation = "row";
loadGroupS.alignChildren = ["center", "center"];
loadGroupS.spacing = 10;
loadGroupS.margins = 0;

var filepathTextS = loadGroupS.add("statictext", undefined, undefined);
filepathTextS.preferredSize.width = 200;

var loadButtonS = loadGroupS.add("button", undefined, undefined);
loadButtonS.text = "Scripts Folder";

var reloadButtonS = loadGroupS.add("button", undefined, undefined);
reloadButtonS.text = "Reload";

// LOAD BUTTON
loadButtonS.onClick = function () {
  // Open a file dialog to select a file
  var fileSettingS = Folder.selectDialog("Select a folder:");
  if (fileSettingS == null) {
    //  alert("File open cancelled")
  } else {
    app.settings.saveSetting(scriptNameS, filePathVarCheckS, fileSettingS.fsName);
  //  alert(fileSettingS.fsName);
    emptygroupGroupS();
  //  scriptsFolderG = fileSettingS.fsName;
    loadScriptFolderData(fileSettingS);
  }
};

reloadButtonS.onClick = function () {
  var fileSettingS = app.settings.getSetting(scriptNameS, filePathVarCheckS);
  emptygroupGroupS();
  loadScriptFolderData(fileSettingS);
};


// CREATE GROUPS FOR TAB
// PANELLEFT
// =========
var panelLeft = tab2.add("panel", undefined, undefined, { name: "panelLeft" });
panelLeft.orientation = "column";
panelLeft.preferredSize.width = 200;
panelLeft.alignChildren = ["left", "top"];
panelLeft.spacing = 10;
panelLeft.margins = 10;

// RIGHTGROUP
// ==========
var rightGroup = tab2.add("panel", undefined, undefined, {
  name: "rightGroup",
});
rightGroup.text = "Move layers";
rightGroup.preferredSize.width = 200;
rightGroup.orientation = "row";
rightGroup.alignChildren = ["left", "top"];
rightGroup.spacing = 10;
rightGroup.margins = 10;
rightGroup.alignment = ["center", "top"];

var checkboxX = rightGroup.add("radiobutton", undefined, undefined, {
  name: "checkboxX",
});
checkboxX.text = "X";
checkboxX.value = true;
checkboxX.alignment = ["left", "center"];

var checkboxY = rightGroup.add("radiobutton", undefined, undefined, {
  name: "checkboxY",
});
checkboxY.text = "Y";
checkboxY.alignment = ["left", "center"];

var moveLayersNr = rightGroup.add(
  'edittext {justify: "center", properties: {name: "moveLayersNr"}}'
);
moveLayersNr.text = "300";
moveLayersNr.preferredSize.width = 30;
moveLayersNr.alignment = ["left", "fill"];

var moveLayersButton = rightGroup.add("button", undefined, undefined, {
  name: "moveLayersButton",
});
moveLayersButton.text = "Ok";

moveLayersButton.onClick = function () {
  var distance = moveLayersNr.text;
  var x = checkboxX.value;
  var y = checkboxY.value;
  distanceLayers(distance, x, y);
};

// RULERS HELPER
// ==========================================
var rulerGroup = panelLeft.add("panel", undefined, undefined);
rulerGroup.text = "Add ruler at Anchor Point";
rulerGroup.preferredSize.width = 400;
rulerGroup.orientation = "row";
rulerGroup.alignChildren = ["center", "center"];
rulerGroup.spacing = 10;
rulerGroup.margins = 10;

var addRuler = rulerGroup.add("button", undefined, undefined);
addRuler.text = "Add rulers";
var removeRulers = rulerGroup.add("button", undefined, undefined);
removeRulers.text = "Remove all rulers";
removeRulers.helpTip = "TOOLTIP";

addRuler.onClick = function () {
  var selectedLayer = app.project.activeItem.selectedLayers[0];

  addRulersToAnchorPoint(selectedLayer);
};

removeRulers.onClick = function () {
  removeAllRulers();
};

// TEST STUFF
// ==========================================

var testG = panelLeft.add("panel", undefined, undefined);
testG.text = "Good Stuff";
testG.preferredSize.width = 400;
// testG.orientation = "column";
testG.alignChildren = ["center", "center"];
testG.spacing = 10;
testG.margins = 10;

var centerAnchor = testG.add("button", undefined, undefined);
centerAnchor.text = "Center Anchor Point";

var scaleButton = testG.add("button", undefined, undefined);
scaleButton.text = "Scale based on selected";

var positionButton = testG.add("button", undefined, undefined);
positionButton.text = "Position based on selected";

scaleButton.onClick = function () {
  scaleBasedOnSelected();
};
positionButton.onClick = function () {
  positionBasedOnSelected();
};

centerAnchor.onClick = function () {
  centerAnchorP();
};

var createLinkNull = panelLeft.add("panel", undefined, undefined);
createLinkNull.text = "Link To Null";
createLinkNull.preferredSize.width = 400;
// createLinkNull.orientation = "column";
createLinkNull.alignChildren = ["center", "center"];
createLinkNull.spacing = 10;
createLinkNull.margins = 10;

var nullName = createLinkNull.add("edittext", undefined, "");
nullName.characters = 20; // Set the number of characters for the input field

var createLinkNullB = createLinkNull.add("button", undefined, undefined);
createLinkNullB.text = "Link To Null";

createLinkNullB.onClick = function () {
  var nullname = nullName.text;

  checkSelected(ConnectToNull, nullname);
};

// FOOTER
// ====================================================================================================
var footer = panel.add("group", undefined);
footer.orientation = "row";
footer.alignChildren = ["center", "center"];
footer.spacing = 5;
footer.margins = 0;


var footer01b = footer.add("statictext", undefined, "Website and readme - ");
var footer02b = footer.add(
  "edittext",
  undefined,
  "github.com/davidguva/random-ae-tools-by-dewey"
);

var footerLow = panel.add("group", undefined);
footerLow.orientation = "row";
footerLow.alignChildren = ["center", "center"];
footerLow.spacing = 5;
footerLow.margins = 0;

var footerLow1 = footerLow.add("statictext", undefined, "Buy me a coffee - ");
var footerLow2 = footerLow.add(
  "edittext",
  undefined,
  "buymeacoffee.com/davidguva"
);
var footerLowB = panel.add("group", undefined);
footerLowB.orientation = "row";
footerLowB.alignChildren = ["center", "center"];
var footer01 = footerLowB.add("statictext", undefined, undefined);
footer01.text = "Made by David Guvå";

//CHECK IF LAYER IS SELECTED MIDDLEWARE
function checkSelected(callback) {
  // Check if a composition is open
  if (app.project.activeItem && app.project.activeItem instanceof CompItem) {
    // Check if a layer or more is selected
    var selectedLayers = app.project.activeItem.selectedLayers;
    if (selectedLayers.length > 0) {
      // Call the callback function with the passed parameters if the conditions are met
      // Call the callback function with the passed parameters if the conditions are met
      var args = Array.prototype.slice.call(arguments, 1);
      callback.apply(null, args);
    } else {
      alert("Please select one or more layers in the active composition.");
    }
  } else {
    alert("Please open a composition.");
  }
}

// FUNCTIONS - TAB 02
// ============================================================

function removeAllRulers() {
  guideIndex = app.project.activeItem.guides;

  for (var i = 0; i < guideIndex.length; i++) {
    app.project.activeItem.removeGuide(0);
  }
}

function addRulersToAnchorPoint(selectedLayer) {
  // Get the anchor point position of the layer
  var layers = app.project.activeItem.selectedLayers;
  if (layers.length === 0) {
    alert("Please select at least one layer.");
  } else {
    var xPosition = layers[0].property("position").value[1];
    var yPosition = layers[0].property("position").value[0];
    var horizontalRuler = app.project.activeItem.addGuide(0, xPosition);
    var verticalRuler = app.project.activeItem.addGuide(1, yPosition);
  }
}

function ConnectToNull(nullname) {
  var selectedLayers = app.project.activeItem.selectedLayers;

  var comp = app.project.activeItem;
  var nullLayer = comp.layers.addNull();
  nullLayer.name = nullname;

  for (var i = 0; i < selectedLayers.length; i++) {
    if (selectedLayers[i].parent != null) {
      selectedLayers[i].parent = null;
      $.writeln(selectedLayers[i].name);
    }

    for (var i = 0; i < selectedLayers.length; i++) {
      selectedLayers[i].parent = nullLayer;
    }
  }
}

function distanceLayers(distance, x, y) {
  var layers = app.project.activeItem.selectedLayers;

  // Get the selected layers

  var firstPositionX = layers[0].property("position").value[0];
  var firstPositionY = layers[0].property("position").value[1];

  // Iterate through the layers starting from the second one
  for (var i = 1; i < layers.length; i++) {
    // Calculate the new position of the layer based on the distance from the first layer
    if (x === true) {
      var newPositionX = [
        firstPositionX + i * distance,
        layers[i].property("position").value[1],
      ];
      // Set the position of the layer
      layers[i].property("position").setValue(newPositionX);
    } else {
      var newPositionY = [
        layers[i].property("position").value[0],
        firstPositionY + i * distance,
      ];
      // Set the position of the layer
      layers[i].property("position").setValue(newPositionY);
    }
  }
}

function centerAnchorP() {
  app.executeCommand(
    app.findMenuCommandId("Center Anchor Point in Layer Content")
  );
}

function positionBasedOnSelected() {
  var activeComp = app.project.activeItem;
  var selectedLayers = activeComp.selectedLayers;
  // Check if there is an active composition and at least two layers selected
  if (
    !activeComp ||
    !(activeComp instanceof CompItem) ||
    activeComp.selectedLayers.length < 2
  ) {
    alert("Please select a composition and at least two layers.");
    return; // Exit the function if conditions are not met
  }
  var layerS = app.project.activeItem.selectedLayers[0];
  var sourcePosition = layerS.transform.position.value;

  for (var i = 1; i < selectedLayers.length; i++) {
    var targetLayer = selectedLayers[i];
    targetLayer.transform.position.setValue(sourcePosition);
  }
}

function scaleBasedOnSelected() {
  var activeComp = app.project.activeItem;
  var selectedLayers = activeComp.selectedLayers;
  // Check if there is an active composition and at least two layers selected
  if (
    !activeComp ||
    !(activeComp instanceof CompItem) ||
    activeComp.selectedLayers.length < 2
  ) {
    alert("Please select a composition and at least two layers.");
    return; // Exit the function if conditions are not met
  }

  var layerS = app.project.activeItem.selectedLayers[0];
  // var layerT = app.project.activeItem.selectedLayers[1];

  var sourceRectS = layerS.sourceRectAtTime(app.project.activeItem.time, true);

  var transformS = layerS.transform;
  var scaleXS = transformS.scale.value[0] / 100.0; // Divide by 100 to convert from percentage
  var scaleYS = transformS.scale.value[1] / 100.0;
  var widthS = sourceRectS.width * scaleXS;
  var heightS = sourceRectS.height * scaleYS;

  for (var i = 1; i < selectedLayers.length; i++) {
    var layer = selectedLayers[i];
    setLayerHeightToPixels(heightS, layer);
  }
}

function setLayerHeightToPixels(targetHeight, layer) {
  //   var activeComp = app.project.activeItem;

  // Check if there is an active composition and at least one layer is selected
  //   if (!activeComp || !(activeComp instanceof CompItem) || activeComp.selectedLayers.length === 0) {
  //       alert("Please select a composition and at least one layer.");
  //       return; // Exit the function if conditions are not met
  //   }

  //  var layer = activeComp.selectedLayers[1]; // Assume the first selected layer is the target

  // Calculate the current height at the current comp time
  var sourceRect = layer.sourceRectAtTime(activeComp.time, true);
  var currentHeight = sourceRect.height;
  var currentScale = layer.transform.scale.value;
  var scaleY = currentScale[1] / 100; // Convert percentage to decimal for calculation

  // The actual current height taking into account the scale
  var actualCurrentHeight = currentHeight * scaleY;

  // Calculate the new scale factor based on the desired height
  var newScaleFactor = (targetHeight / actualCurrentHeight) * currentScale[1];

  // Set the new scale while maintaining the aspect ratio
  layer.transform.scale.setValue([newScaleFactor, newScaleFactor]);
}

// FUNCTIONS EXPRESSION HELPER
// ====================================================================================================
function loadData(fileSetting) {
  var file = new File(fileSetting);
  var filename = file.fsName;
  $.writeln(filename);

  filepathText.text = "Expression File: " + file.name;

  try {
    // Attempt to open the file and parse the JSON
    file.open("r");
    var rawJson = file.read();
    file.close();

    const content = JSON.parse(rawJson); // This might throw if rawJson is not valid JSON
    $.writeln(JSON.stringify(content));
    createUI(content); // Assume this function uses the parsed JSON to create a UI
  } catch (e) {
    // Handle any errors that may have occurred in the try block
    if (e instanceof SyntaxError) {
      filepathText.text = "JSON error, please select another file";
      $.writeln("Error parsing JSON: " + e.message);
    } else if (e instanceof IOError) {
      filepathText.text = "File error, could not read file";
      $.writeln("IO Error: " + e.message);
    } else {
      filepathText.text = "Unknown error, please try again";
      $.writeln("Unknown Error: " + e.message);
    }
  }
}

function createUI(content) {
  var data = content;
  for (var i = 0; i < data.length; i++) {
    createGroupWithBorder(
      data[i].title,
      data[i].dropdownText,
      data[i].dropdownPosition,
      data[i].dropdownExpression
    );
    $.writeln("emptygroupGroup " + groupGroup.length);
  }
}

function emptygroupGroup() {
  $.writeln("emptygroupGroup " + groupGroup.length);

  for (var i = 0; i < groupGroup.length; i++) {
    expressionpanel.remove(groupGroup[i]);
  }

  groupGroup.length = 0;
  expressionpanel.preferredSize.height = 30;
  panel.layout.layout(true);
  panel.layout.resize(true);
  panel.layout.resize();
}

function clearPanel(panel) {
    while (panel.children.length > 0) {
        panel.remove(panel.children[0]);
    }
}
function emptygroupGroupS() {
  clearPanel(scriptPanel);
 // scriptGroup.remove();
 // scriptGroup.length = 0;

 // panel.layout.layout(true);
 // panel.layout.resize(true);
}

function createGroupWithBorder(
  title,
  dropdownText,
  dropdownPosition,
  dropdownExpression
) {
  var createGroup = expressionpanel.add("group", undefined);
  createGroup.orientation = "column";
  createGroup.alignChildren = ["center", "center"];
  createGroup.spacing = 10;
  createGroup.margins = 0;

  var grouptitle = createGroup.add("statictext", undefined, undefined, {
    name: "grouptitle",
  });
  grouptitle.text = title;
  grouptitle.italic = true;
  // EXPRESSIONGROUP

  // ===============
  var expressiongroup = createGroup.add("group", undefined, {
    name: "expressiongroup",
  });
  expressiongroup.orientation = "row";
  expressiongroup.alignChildren = ["left", "center"];
  expressiongroup.spacing = 10;
  expressiongroup.margins = 0;

  var dropdown = expressiongroup.add("dropdownlist", undefined, []);
  for (var i = 0; i < dropdownText.length; i++) {
    var listItem = dropdown.add("item", dropdownText[i]);
    listItem.data = {
      dropdownPosition: dropdownPosition[i],
      dropdownExpression: dropdownExpression[i],
    };
  }
  dropdown.selection = 0;
  dropdown.preferredSize.width = 300;

  var button = expressiongroup.add("button", undefined, undefined, {
    name: "button1",
  });
  button.text = "Apply";

  button.onClick = function () {
    //  var stringValue1 = dropdownExpression[0];
    // var stringValue2 = dropdownExpression[1];

    var selectedItem = dropdown.selection;
    addExpression(
      selectedItem.data.dropdownPosition,
      selectedItem.data.dropdownExpression
    );
  };

  groupGroup.push(createGroup);
  // Update the panel to show the new group

  panel.layout.layout(true);
  panel.layout.resize();
  return;
}

function addExpression(dropdownPosition, dropdownExpression) {
  // Get the active composition
  var activeComp = app.project.activeItem;

  // Check if a comp is selected
  if (!activeComp || !(activeComp instanceof CompItem)) {
    alert("Please select a composition.");
  } else {
    // Get selected layers
    var selectedLayers = activeComp.selectedLayers;

    // Check if any layers are selected
    if (selectedLayers.length === 0) {
      alert("Please select at least one layer.");
    } else {
      // Get the expression to apply
      dropdownExpression = dropdownExpression.replace(/\\\\/g, "");
      dropdownExpression = dropdownExpression.replace(/\\n/g, "\n");
      dropdownExpression = dropdownExpression
        .replace(/\\\{/g, "{")
        .replace(/\\\}/g, "}")
        .replace(/\\\(/g, "(")
        .replace(/\\\)/g, ")");
      var expression = dropdownExpression;

      // Apply expression to the appropriate property
      for (var i = 0; i < selectedLayers.length; i++) {
        var layer = selectedLayers[i];

        if (dropdownPosition === "user") {
          // Apply expression to currently selected properties if "user" is specified
          var selectedProperties = layer.selectedProperties;
          for (var j = 0; j < selectedProperties.length; j++) {
            var selectedProperty = selectedProperties[j];
            if (selectedProperty.canSetExpression) {
              selectedProperty.expression = expression;
            } else {
              alert("Selected property cannot have an expression.");
            }
          }
        } else {
          // Apply expression to a specific property
          var property = layer.property(dropdownPosition);
          if (property && property.canSetExpression) {
            property.expression = expression;
          } else {
            alert(
              "Property '" +
                dropdownPosition +
                "' cannot have an expression or does not exist."
            );
          }
        }
      }
    }
  }
}

// CHECK SETTINGS
// ====================================================
if (app.settings.haveSetting(scriptName, filePathVarCheck)) {
  if (app.settings.getSetting(scriptName, filePathVarCheck) == 0) {
    filepathText.text = "Is null. No settings file set, first time using.";
  } else {
    var fileSetting = app.settings.getSetting(scriptName, filePathVarCheck);
    loadData(fileSetting);
  }
} else {
  filepathText.text = "No settings file set, first time using.";
}

if (app.settings.haveSetting(scriptNameS, filePathVarCheckS)) {
  if (app.settings.getSetting(scriptNameS, filePathVarCheckS) == 0) {
    filepathTextS.text = "Is null. No settings file set, first time using.";
  } else {
    var fileSettingSData = app.settings.getSetting(scriptNameS, filePathVarCheckS);
    loadScriptFolderData(fileSettingSData);
  }
} else {
  filepathTextS.text = "No settings file set, first time using.";
}

if (panel instanceof Window) {
  panel.show();
} else {
  panel.layout.layout(true);
  panel.layout.resize(true);
}

function loadScriptFolderData(fileSettingS) {
    filepathTextS.text = fileSettingS;
    var scriptsFolder = Folder(fileSettingS);
    var scripts = scriptsFolder.getFiles("*.jsx");

    for (var i = 0; i < scripts.length; i++) {
        var scriptGroup = scriptPanel.add("group", undefined, { name: "scriptGroup" });
        scriptGroup.orientation = "row";
        scriptGroup.alignChildren = ["left", "center"];
        scriptGroup.spacing = 10;
        scriptGroup.margins = 0;

        var scriptFile = scripts[i];
        var scriptText = scriptGroup.add("statictext", undefined, undefined, {name: "scriptText"});
        var displayName = scriptFile.displayName.split('.').slice(0, -1).join('.');
        scriptText.text = displayName;
        scriptText.preferredSize.width = 200;
        scriptText.alignment = ["left", "center"];

        // Reading the first line of the script file to check for tooltip
        var file = new File(scriptFile.fsName);
        if (file.open('r')) {
            var firstLine = file.readln();
            if (typeof firstLine === 'string' && firstLine.indexOf('//') === 0) {
            //  alert(firstLine);
                //var tooltip = firstLine.slice(2).trim(); // Changed from substring to slice
               scriptText.helpTip = firstLine;
            }
            file.close();
        }

        var scriptButton = scriptGroup.add("button", undefined, undefined, { name: "scriptButton" });
        scriptButton.text = "Run";
        scriptButton.alignment = ["right", "bottom"];
        scriptButton.script = scriptFile;

        scriptButton.onClick = function () {
            $.evalFile(this.script);
        };
    }
    panel.layout.layout(true);
    panel.layout.resize();
}


