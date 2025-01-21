//Phase 4, Step 1: Adding Content
// First up, let's create a new list item and store it in a variable.
let newIngredientElement = document.createElement('li');

// Now let's update the text content of that list item.
newIngredientElement.textContent = 'Jalapenos';

// And finally, let's add that list item as a child of the ul.
document.querySelector('#ingredientsList').appendChild(newIngredientElement);
