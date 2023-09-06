function tableDataToArray() {
    var data_table = document.getElementById("data_table");
    var data = [];

    for (var i = 1; i < data_table.rows.length; i++) {
        var row = data_table.rows[i];
        var rowData = {
            name: row.cells[0].textContent,
            country: row.cells[1].textContent,
            email: row.cells[2].textContent
        };
        data.push(rowData);
    }

    return data;
}

var dataArray = tableDataToArray();
console.log(dataArray);
function edit_row(rowId) {
    var row = document.getElementById("data_table").rows[rowId];
    row.cells[0].contentEditable = true; 
    row.cells[1].contentEditable = true; 
    row.cells[2].contentEditable = true; 
}

function save_row(rowId) {
    var row = document.getElementById("data_table").rows[rowId];
    row.cells[0].contentEditable = false; 
    row.cells[1].contentEditable = false; 
    row.cells[2].contentEditable = false; 
}

function delete_row(rowId) {
    document.getElementById("data_table").deleteRow(rowId);
}
function addRow() {
    var formName = document.getElementById("form-name").value;
    var formCountry = document.getElementById("form-country").value;
    var formEmail = document.getElementById("form-email").value;

    var table = document.getElementById("data_table");
    var newRow = table.insertRow(-1); 

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = formName;
    cell2.innerHTML = formCountry;
    cell3.innerHTML = formEmail;

    var editButton = document.createElement("input");
    editButton.type = "button";
    editButton.value = "Edit";
    editButton.className = "edit";
    editButton.onclick = function () {
        editRow(newRow);
    };

    var saveButton = document.createElement("input");
    saveButton.type = "button";
    saveButton.value = "Save";
    saveButton.className = "save";
    saveButton.style.display = "none"; 
    saveButton.onclick = function () {
        saveRow(newRow);
    };

    var deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.value = "Delete";
    deleteButton.className = "delete";
    deleteButton.onclick = function () {
        deleteRow(newRow);
    };

    cell4.appendChild(editButton);
    cell4.appendChild(saveButton);
    cell4.appendChild(deleteButton);

    clearFormInputs();
}

function editRow(row) {
    var cells = row.cells;
    var name = cells[0].innerHTML;
    var country = cells[1].innerHTML;
    var email = cells[2].innerHTML;

    cells[0].innerHTML = "<input type='text' value='" + name + "'>";
    cells[1].innerHTML = "<input type='text' value='" + country + "'>";
    cells[2].innerHTML = "<input type='text' value='" + email + "'>";

    row.querySelector(".edit").style.display = "none";
    row.querySelector(".save").style.display = "inline-block";
}

function saveRow(row) {
    var cells = row.cells;
    var nameVal = cells[0].querySelector("input").value;
    var countryVal = cells[1].querySelector("input").value;
    var emailVal = cells[2].querySelector("input").value;

    cells[0].innerHTML = nameVal;
    cells[1].innerHTML = countryVal;
    cells[2].innerHTML = emailVal;

    row.querySelector(".edit").style.display = "inline-block";
    row.querySelector(".save").style.display = "none";
}

function deleteRow(row) {
    row.parentNode.removeChild(row);
}

function clearFormInputs() {
    document.getElementById("form-name").value = "";
    document.getElementById("form-country").value = "";
    document.getElementById("form-email").value = "";
}
function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var country=document.getElementById("country_row"+no);
 var age=document.getElementById("age_row"+no);
	
 var name_data=name.innerHTML;
 var country_data=country.innerHTML;
 var age_data=age.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
 age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var country_val=document.getElementById("country_text"+no).value;
 var age_val=document.getElementById("age_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("country_row"+no).innerHTML=country_val;
 document.getElementById("age_row"+no).innerHTML=age_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

