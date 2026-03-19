export let categories = {}

function newCategory(name) {
  if (!Object.hasOwn(categories, name) && name !== '') {
  categories[name] = []
  } else if (Object.hasOwn(categories, name)) {
    console.log('category already exists!')
  } else if (name === '') {
    console.log('category name is empty!')
  }
  updateStorage()
}

function removeCategory(name) {
  if (Object.hasOwn(categories, name && name !== 'completed' && name !== 'default')) {
    delete categories[name]
  } else if (name === 'completed' || name === 'default') {
    console.log('this category cannot be deleted!')
  }
  updateStorage()
}

export function getItem(id) {
  const allCategories = Object.values(categories)
  for (const category of allCategories) {
    const targetItem = category.find((item) => item.id === id)
    if (targetItem !== undefined) {
      console.log(targetItem)
      window.targetItem = targetItem
      return targetItem
    }
  }
  console.log('item not found!')
  return undefined
}

export function updateStorage() {
  const categoriesString = JSON.stringify(categories)
  localStorage.setItem("allItems", categoriesString)
}

export function retrieveStorage() {
  if (localStorage.getItem("allItems") !== null) {
    categories = JSON.parse(localStorage.getItem("allItems"))
  } else {
    categories = {  completed: [], default: [],}
  }
}

function clearStorage() {
  localStorage.clear()
  console.log('localStorage has been wiped!')
}

window.categories = categories
window.newCategory = newCategory
window.removeCategory = removeCategory
window.getItem = getItem
window.clearStorage = clearStorage