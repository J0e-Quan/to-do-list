import { compareAsc } from "date-fns"
import { categories, getItem, updateStorage } from "./categories.js"

export function placeItem(item) {
  const existingItem = getItem(item.id)
  if (existingItem !== undefined) {
    deleteItem(existingItem)
  }
  const targetCategory = item.category
  if (Object.hasOwn(categories, targetCategory)) {
    categories[targetCategory].push(item)
    sortItems(targetCategory)
  } else {
    console.log('category does not exist!')
  }
}

export function deleteItem(item) {
  const allCategories = Object.values(categories)
  for (const category of allCategories) {
    const existingItemIndex = category.findIndex((targetItem) => targetItem.id === item.id) 
    if (existingItemIndex !== -1) {
      category.splice(existingItemIndex, 1)
      updateStorage()
      return
    }
    // if there is no item to delete, nothing changes, so no need to updateStorage()
    console.log('no item to delete!')
  }     
}

export function sortItems(category) {
  categories[category].sort(compareItems) 
  function compareItems(a, b) {
    // compareAsc returns 0 if the dates are identical
    if (compareAsc(a.dueDate, b.dueDate) === 0) {
      return compareAsc(a.priority, b.priority)
    } else {
      return compareAsc(a.dueDate, b.dueDate)
    }
  }
  updateStorage()
}

export function viewCategory(category) {
}

export function moveTickedItem(item) {
  const existingItem = getItem(item.id)
  if (existingItem !== undefined) {
    deleteItem(existingItem)
  }
  if (item.isTicked === true) {
    categories.completed.push(item)
  } else if (item.isTicked === false) {
    placeItem(item)
  }
  updateStorage()
}

window.viewCategory = viewCategory