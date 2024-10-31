var ulElement = document.getElementById('list');

function addtodo() {

  var input = document.getElementById('inputField');

  if (input.value) {

    var liElement = document.createElement('li');

    var liText = document.createTextNode(input.value);

    liElement.appendChild(liText);

    ulElement.appendChild(liElement);

    // Create Delete Button liElement:

    var delBtnElement = document.createElement('button');

    var delBtnText = document.createTextNode('Delete');

    delBtnElement.appendChild(delBtnText);

    liElement.appendChild(delBtnElement);

    delBtnElement.setAttribute('onclick','deleteSingleItem(this)');

    // Create Edit Button liElement:

    var editBtnElement = document.createElement('button');

    var editBtnText = document.createTextNode('Edit');

    editBtnElement.appendChild(editBtnText);

    liElement.appendChild(editBtnElement);

    editBtnElement.setAttribute('onclick','editItem(this)');

    console.log(liElement);

    input.value = "";

  }

  else {

    alert("Fill the field..");
  
  }

}

function deleteAllItems() {

  ulElement.innerHTML = "";

}

function deleteSingleItem(d) {

  d.parentNode.remove();
  
}

function editItem(e) {
  
  var updatedValue = prompt("Enter updated value..");

  e.parentNode.firstChild.nodeValue = updatedValue;

}