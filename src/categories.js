import { renderNewCategory } from './ui.js'

export let categories = {}

export function newCategory(name) {
  if (!Object.hasOwn(categories, name) && name !== '') {
    categories[name] = []
  }
  updateStorage()
}

export function removeCategory(name) {
  if (Object.hasOwn(categories, name) && name !== 'Completed' && name !== 'Default') {
    delete categories[name]
  }
  updateStorage()
}

export function getItem(id) {
  const allCategories = Object.values(categories)
  for (const category of allCategories) {
    const targetItem = category.find((item) => item.id === id)
    if (targetItem !== undefined) {
      return targetItem
    }
  }
  return undefined
}

export function updateStorage() {
  const categoriesString = JSON.stringify(categories)
  localStorage.setItem('allItems', categoriesString)
}

export function retrieveStorage() {
  if (localStorage.getItem('allItems') !== null) {
    categories = JSON.parse(localStorage.getItem('allItems'))
    renderExistingCategories()
  } else {
    categories = { Completed: [], Default: [] }
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