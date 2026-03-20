import { renderNewCategory } from "./ui.js"

export let categories = {}

export function newCategory(name) {
  if (!Object.hasOwn(categories, name) && name !== '') {
  categories[name] = []
  } else if (Object.hasOwn(categories, name)) {
    console.log('category already exists!')
  } else if (name === '') {
    console.log('category name is empty!')
  }
  updateStorage()
}

export function removeCategory(name) {
  console.log(name)
  if (Object.hasOwn(categories, name) && name !== 'Completed' && name !== 'Default') {
    console.log('deleted!')
    delete categories[name]
  } else if (name === 'Completed' || name === 'Default') {
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
  console.log('storage updated!')
}

export function retrieveStorage() {
  console.log('retrieving storage...')
  if (localStorage.getItem("allItems") !== null) {
    categories = JSON.parse(localStorage.getItem("allItems"))
    renderExistingCategories()
  } else {
    categories = {  Completed: [], Default: [],}
    updateStorage()
  }
}

function renderExistingCategories() {
  const allCategories = Object.getOwnPropertyNames(categories)
  for (const category of allCategories) {
    if (category !== 'Completed' && category !== 'Default') {
      renderNewCategory(category)
    }
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