// Add new ingredient li
let newIngredientElement = document.createElement('li');
newIngredientElement.textContent = 'Jalapenos';
document.querySelector('#ingredientsList').appendChild(newIngredientElement);
let myDiv = document.getElementById("ingredientsList");

// Create checkbox
let checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";
myDiv.appendChild(checkbox);

// Create label for checkbox
let label = document.createElement("label");
label.htmlFor = "id";
label.appendChild(document.createTextNode("This create the label for checkbox"));
myDiv.appendChild(label);

// Add eventlistener to strikethrough checked text
checkbox.addEventListener("click", function() {
  if(checkbox.checked){
    label.classList = "checked";
  } else{
    label.classList.remove("checked");
  }
});