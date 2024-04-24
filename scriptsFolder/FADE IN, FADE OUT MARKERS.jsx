// Add a fade in and out to a layer connected to 2 markers
(function() {
    var comp = app.project.activeItem;
    if (!comp || !(comp instanceof CompItem)) {
        alert("Please select a composition.");
        return;
    }

    var selectedLayers = comp.selectedLayers;
    if (selectedLayers.length === 0) {
        alert("Please select at least one layer.");
        return;
    }

    app.beginUndoGroup("Apply Markers and Expression to Multiple Layers");

    // Loop through all selected layers
    for (var j = 0; j < selectedLayers.length; j++) {
        var layer = selectedLayers[j];

        // Remove all existing markers
        var markerProp = layer.property("Marker");
        while (markerProp.numKeys > 0) {
            markerProp.removeKey(1);
        }

        // Remove all opacity keyframes and set opacity to 100
        var opacityProp = layer.property("Opacity");
        if (opacityProp.numKeys > 0) {
            for (var i = opacityProp.numKeys; i > 0; i--) {
                opacityProp.removeKey(i);
            }
        }
        opacityProp.setValue(100);

        // Calculate marker times relative to the layer's in-point
        var firstMarkerTime = layer.inPoint + 1; // 1 second after the layer starts
        var secondMarkerTime = layer.outPoint - 1; // 1 second before the layer ends

        // Create new markers
        var firstMarker = new MarkerValue("Fade In End");
        var secondMarker = new MarkerValue("Start Fade Out");
        markerProp.setValueAtTime(firstMarkerTime, firstMarker);
        markerProp.setValueAtTime(secondMarkerTime, secondMarker);

        // Apply expression to Opacity
        var expression = "if (thisLayer.marker.numKeys > 0) {\n" +
            "    var firstMarkerTime = thisLayer.marker.key(1).time;\n" +
            "    var secondMarkerExists = thisLayer.marker.numKeys > 1;\n" +
            "    var secondMarkerTime = secondMarkerExists ? thisLayer.marker.key(2).time : thisLayer.outPoint;\n" +
            "\n" +
            "    if (time < thisLayer.inPoint) {\n" +
            "        0\n" +
            "    } else if (time < firstMarkerTime) {\n" +
            "        linear(time, thisLayer.inPoint, firstMarkerTime, 0, 100)\n" +
            "    } else if (time < secondMarkerTime) {\n" +
            "        100\n" +
            "    } else if (secondMarkerExists && time < thisLayer.outPoint) {\n" +
            "        linear(time, secondMarkerTime, thisLayer.outPoint, 100, 0)\n" +
            "    } else {\n" +
            "        100\n" +
            "    }\n" +
            "} else {\n" +
            "    0\n" +
            "}";
        layer.opacity.expression = expression;
    }

    app.endUndoGroup();
})();
