var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// var li1 = document.querySelectorAll("li");
// n = li1.length;
// var li2;
// for(i = 0; i <= n; i++){
// 	li1[i].classList.add("items");
// }

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function toggleOnClick() {
	var li = event.target;
	li.classList.toggle("done");
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

button.addEventListener("click", addListAfterClick);
ul.addEventListener("click", toggleOnClick);
input.addEventListener("keypress", addListAfterKeypress);