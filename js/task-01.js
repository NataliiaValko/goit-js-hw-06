const categoriesItemsRef = document.querySelectorAll('li.item')

const consoleQuantityCategory = () =>
  console.log(`Number of categories: ${categoriesItemsRef.length}\n\n`)

const consoleCategoryDetails = () => {
  categoriesItemsRef.forEach((category) => {
    console.log(
      `Category: ${category.querySelector('h2').textContent}\nElements: ${
        category.querySelectorAll('ul li').length
      }\n\n`
    )
  })
}

consoleQuantityCategory()
consoleCategoryDetails()
