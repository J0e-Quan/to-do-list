import { compareAsc } from "date-fns"
import { categories, getItem } from "./categories.js"

export function placeItem(item) {
  const existingItem = getItem(item.id)
  console.log('existingItem: ' + existingItem)
  if (existingItem !== undefined) {
    // delete existingItem
    console.log('deleting existingItem...')
    const allCategories = Object.values(categories)
    for (const category of allCategories) {
      const existingItemIndex = category.findIndex((targetItem) => targetItem.id === existingItem.id) 
      if (existingItemIndex !== -1) {
        category.splice(existingItemIndex, 1)
      }
    }   
  }
  const targetCategory = item.category
  if (Object.hasOwn(categories, targetCategory)) {
    categories[targetCategory].push(item)
    sortItems(targetCategory)
  } else {
    console.log('category does not exist!')
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
  console.log(categories[category])
}