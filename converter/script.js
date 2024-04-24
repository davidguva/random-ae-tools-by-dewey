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
            renderEditor(data);
        } catch (e) {
            alert('Invalid JSON file.');
        }
    };
    reader.readAsText(file);
});

function renderEditor(data) {
    const editor = document.getElementById('jsonEditor');
    editor.innerHTML = ''; // Clear previous entries

    data.forEach((item, index) => {
        const container = document.createElement('div');
        container.style.border = "1px solid #ccc";
        container.style.padding = "10px";
        container.style.marginBottom = "5px";

        const titleInput = document.createElement('input');
        titleInput.className = 'titleInput';
        titleInput.value = item.title;
        titleInput.oninput = (e) => data[index].title = e.target.value;
        container.appendChild(titleInput);

        // Button to remove the entire title group
        const removeGroupBtn = document.createElement('button');
        removeGroupBtn.textContent = 'Remove Group';
        removeGroupBtn.className = 'removeButton';
        removeGroupBtn.onclick = () => {
            data.splice(index, 1);
            renderEditor(data); // re-render the editor view
        };
        container.appendChild(removeGroupBtn);
        
        const maxDropdowns = Math.max(item.dropdownText.length, item.dropdownPosition.length, item.dropdownExpression.length);
        for (let i = 0; i < maxDropdowns; i++) {
            const groupContainer = document.createElement('div');
            groupContainer.style.marginTop = "10px";
            groupContainer.className = 'groupContainer';


            // Button to remove this dropdown set
            addDropdownFields('Expression Title', item.dropdownText, groupContainer, i, index);
            const removeDropdownBtn = document.createElement('button');
            removeDropdownBtn.textContent = 'Remove Expression';
            
            removeDropdownBtn.className = 'removeButton';
            removeDropdownBtn.onclick = () => {
                item.dropdownText.splice(i, 1);
                item.dropdownPosition.splice(i, 1);
                item.dropdownExpression.splice(i, 1);
                renderEditor(data); // re-render the editor view
            };
            groupContainer.appendChild(removeDropdownBtn);
            addDropdownFields('Position', item.dropdownPosition, groupContainer, i, index);
            addDropdownFields('Expression', item.dropdownExpression, groupContainer, i, index, true);

            container.appendChild(groupContainer);
        }

        // Button to add a new dropdown set
        const addDropdownBtn = document.createElement('button');
        addDropdownBtn.className = 'addButton';
        addDropdownBtn.textContent = 'Add Expression';
        addDropdownBtn.onclick = () => {
            item.dropdownText.push('');
            item.dropdownPosition.push('');
            item.dropdownExpression.push('');
            renderEditor(data); // re-render the editor view
        };
        container.appendChild(addDropdownBtn);
        editor.appendChild(container);
 
 
    });
// Button to add a new group
const addGroupBtn = document.createElement('button');
addGroupBtn.className = 'addButton';
addGroupBtn.textContent = 'Add New Group';
addGroupBtn.onclick = () => {
    const newGroup = {
        title: '',
        dropdownText: [''],
        dropdownPosition: [''],
        dropdownExpression: ['']
    };
    data.push(newGroup);
    renderEditor(data);
};
editor.appendChild(addGroupBtn);
    editor.removeAttribute('hidden');
}

function addDropdownFields(label, arr, container, i, index, isTextarea = false) {
    const fieldLabel = document.createElement('label');
    fieldLabel.textContent = `${label} - ${i+1}:`;
    fieldLabel.style.display = 'block';
    container.appendChild(fieldLabel);

    const input = isTextarea ? document.createElement('textarea') : document.createElement('input');
    input.value = arr[i] || '';
    input.oninput = (e) => arr[i] = e.target.value;
    container.appendChild(input);
}

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
