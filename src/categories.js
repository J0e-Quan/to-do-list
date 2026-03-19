export const categories = {
  completed: [],
  default: [],
}

function newCategory(name) {
  if (!Object.hasOwn(categories, name) && name !== '') {
  categories[name] = []
  } else if (Object.hasOwn(categories, name)) {
    console.log('category already exists!')
  } else if (name === '') {
    console.log('category name is empty!')
  }
  console.log(categories)
}

function removeCategory(name) {
  if (Object.hasOwn(categories, name && name !== 'completed' && name !== 'default')) {
    delete categories[name]
  } else if (name === 'completed' || name === 'default') {
    console.log('this category cannot be deleted!')
  }
  console.log(categories)
}

window.newCategory = newCategory
window.removeCategory = removeCategory