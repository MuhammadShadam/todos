var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    addRedAfterClick(li);
	addDeleteButton(li);
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function addRedAfterClick(li) {
    li.addEventListener("click", function () {
        li.classList.toggle("done");
    });
}

function addDeleteButton(li) {
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.classList.add("delete");
    li.appendChild(deleteButton);
    deleteButton.addEventListener("click", function () {
        ul.removeChild(li);
    });
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
