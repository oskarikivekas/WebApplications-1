import "./styles.css";

var list = document.getElementById("comment-list");

document.getElementById("submit").addEventListener("click", addComment);

function addComment() {
  var li = document.createElement("li");
  var input = document.getElementById("text-input");
  li.appendChild(document.createTextNode(input.value));
  list.appendChild(li);
  input.value = "";
}

document
  .getElementById("remove-comments")
  .addEventListener("click", removeItems);

function removeItems() {
  if (window.confirm("Delete all comments?")) {
    list.innerHTML = "";
  }
}
