// Function to save the current frame as a PNG and open the folder
function saveCurrentFrameAsPNG() {
    var comp = app.project.activeItem; // Get the active composition
    if (!comp || !(comp instanceof CompItem)) {
        alert("No active composition.");
        return;
    }

    var currentFrame = comp.time; // Get the current time in seconds

    // Create and show a dialog to select the folder
    var folder = Folder.selectDialog("Select the folder to save the PNG");
    if (!folder) return;

    // Format the current date and time
    var date = new Date();
    var formattedDate = date.getFullYear().toString().slice(2) + 
                        ("0" + (date.getMonth() + 1)).slice(-2) + 
                        ("0" + date.getDate()).slice(-2) + "_" + 
                        ("0" + date.getHours()).slice(-2) + "-" +  // Change here for hours and minutes
                        ("0" + date.getMinutes()).slice(-2);

    // Create the output filename based on the composition name and the current date/time
    var filename = comp.name + "_" + formattedDate + ".png";
    var outputPath = new File(folder.fsName + "/" + filename); // Path for the output file

    // Use saveFrameToPng to save the current frame
    comp.saveFrameToPng(currentFrame, outputPath);

    // Open the folder where the PNG was saved
    openFolder(folder.fsName);
}

// Function to open a folder in the default file explorer
function openFolder(path) {
    if (Folder.fs === "Windows") {
        system.callSystem("explorer \"" + path + "\"");
    } else if (Folder.fs === "Macintosh") {
        system.callSystem("open \"" + path + "\"");
    }
}

// Call the function
saveCurrentFrameAsPNG();