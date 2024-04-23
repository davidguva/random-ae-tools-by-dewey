let filename;

function singlelineToMultiline(singleline) {
    // Convert escaped newlines back to actual newline characters
    return singleline.replace(/\\n /g, '\n').replace(/\\"/g, '"').replace(/\\\\{/g, '{').replace(/\\\\}/g, '}');
}

function multilineToSingleline(multiline) {
    const escapedString = multiline
        .replace(/\n/g, '\\n ') // Replace line breaks with \n
        .replace(/\s+/g, ' ') // Replace any whitespace sequence with a single space
        // .replace(/\\/g, '\\\\') // Escape backslashes, uncomment if backslashes are used
        .replace(/"/g, '\\"') // Escape double quotes
        .replace(/{/g, '\\\\{') // Escape opening curly braces
        .replace(/}/g, '\\\\}'); // Escape closing curly braces
    return `${escapedString}`;
}
document.getElementById('jsonFile').addEventListener('change', function() {
    if (!this.files.length) {
        alert('Please select a file first!');
        return;
    }

    const file = this.files[0];
    filename = file.name;
    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            data = JSON.parse(event.target.result);
            const editor = document.getElementById('jsonEditor');
            editor.innerHTML = ''; // Clear previous entries
            editor.removeAttribute('hidden');

            data.forEach((item, index) => {
                const container = document.createElement('div');
                container.style.border = "1px solid #ccc";
                container.style.padding = "10px";
                container.style.marginBottom = "5px";

                // Create title input with label
                const titleLabel = document.createElement('label');
                titleLabel.textContent = "Group Description:";
                titleLabel.style.display = 'block';
                container.appendChild(titleLabel);

                const titleInput = document.createElement('input');
                titleInput.className = 'titleInput';
                titleInput.value = item.title;
                titleInput.oninput = (e) => data[index].title = e.target.value;
                container.appendChild(titleInput);

                const maxDropdowns = Math.max(item.dropdownText.length, item.dropdownPosition.length, item.dropdownExpression.length);
                for (let i = 0; i < maxDropdowns; i++) {
                    const groupContainer = document.createElement('div');
                    groupContainer.className = 'groupContainer'
                    groupContainer.style.marginTop = "10px";

                    // Create dropdownText input with label
                    const dropdownTextLabel = document.createElement('label');
                    dropdownTextLabel.textContent = `Expression title:`;
                    dropdownTextLabel.style.display = 'block';
                    groupContainer.appendChild(dropdownTextLabel);

                    const dropdownTextInput = document.createElement('input');
                    dropdownTextInput.value = item.dropdownText[i] || '';
                    dropdownTextInput.oninput = (e) => data[index].dropdownText[i] = e.target.value;
                    groupContainer.appendChild(dropdownTextInput);

                    // Create dropdownPosition input with label
                    const dropdownPositionLabel = document.createElement('label');
                    dropdownPositionLabel.textContent = `Expression property position:`;
                    dropdownPositionLabel.style.display = 'block';
                    groupContainer.appendChild(dropdownPositionLabel);

                    const dropdownPositionInput = document.createElement('input');
                    dropdownPositionInput.value = item.dropdownPosition[i] || '';
                    dropdownPositionInput.oninput = (e) => data[index].dropdownPosition[i] = e.target.value;
                    groupContainer.appendChild(dropdownPositionInput);

                    // Create dropdownExpression textarea with label
                    const dropdownExpressionLabel = document.createElement('label');
                    dropdownExpressionLabel.textContent = `Expression:`;
                    dropdownExpressionLabel.style.display = 'block';
                    groupContainer.appendChild(dropdownExpressionLabel);

                    const dropdownExpressionTextarea = document.createElement('textarea');
                    dropdownExpressionTextarea.value = singlelineToMultiline(item.dropdownExpression[i] || '');
                    dropdownExpressionTextarea.oninput = (e) => data[index].dropdownExpression[i] = e.target.value;
                    groupContainer.appendChild(dropdownExpressionTextarea);

                    container.appendChild(groupContainer);
                }

                editor.appendChild(container);
            });
        } catch (e) {
            alert('Invalid JSON file.');
        }
    };
    reader.readAsText(file);
});

function downloadJson() {
    // Prepare data for download by converting multiline fields back to single lines
    const preparedData = data.map(item => ({
        ...item,
        dropdownExpression: item.dropdownExpression.map(multilineToSingleline)
    }));

    const dataStr = JSON.stringify(preparedData);
    const file = new Blob([dataStr], {type: 'application/json'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(file);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}