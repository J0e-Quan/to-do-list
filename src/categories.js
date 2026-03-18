export const categories = {
  completed: [],
  default: [],
}

function newCategory(name) {
  if (!Object.hasOwn(categories, name)) {
  categories[name] = []
  } else {
    console.log('category already exists!')
  }
  console.log(categories)
}

window.newCategory = newCategory