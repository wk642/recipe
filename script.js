//Phase 4, Step 1: Adding Content
// First up, let's create a new list item and store it in a variable.
let newIngredientElement = document.createElement('li');

// Now let's update the text content of that list item.
newIngredientElement.textContent = 'Jalapenos';

// And finally, let's add that list item as a child of the ul.
document.querySelector('#ingredientsList').appendChild(newIngredientElement);

/*-------------------------------------------------*/
// Phase 4 Step 2: Adding a check mark as an element to a list
let myDiv = document.getElementById("ingredientsList");

// create checkbox element
let checkbox = document.createElement("input");

// add the attributes for a checkbox
checkbox.type = "checkbox";
// checkbox.name = "name";
// checkbox.value = "value";
// checkbox.id = "id";

// create a label for the checkbox
let label = document.createElement("label");

// assign the attributes to the label tag
label.htmlFor = "id";

//append it
label.appendChild(document.createTextNode("This create the label for checkbox"));

myDiv.appendChild(checkbox);
myDiv.appendChild(label);

// Phase 4, step 3/4 add event listener for checking toggle between crossed out and not 
console.log("Look here",checkbox.checked);

checkbox.addEventListener("click", function(){
    console.log("here",checkbox.checked);

    if(checkbox.checked){
        //add checked to class name so it can cross it out
        console.log("it's checked off");
        label.classList = "checked";
    } else{
        console.log("not checked");
        label.classList.remove("checked");
    }
});