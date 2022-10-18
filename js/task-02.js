const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]

const ingredientsListRef = document.querySelector('#ingredients')

const createItem = (text) => {
  const ingredientItemRef = document.createElement('li')
  ingredientItemRef.textContent = text
  ingredientItemRef.classList.add('item')
  return ingredientItemRef
}

const insertItems = (array) => {
  ingredientsListRef.append(...array.map((element) => createItem(element)))
}

insertItems(ingredients)
