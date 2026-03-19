import { compareAsc } from "date-fns"
import { categories } from "./categories.js"

export function placeItem(item) {
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
    if (compareAsc(a.dueDate, b.dueDate) === 0) {
      return compareAsc(a.priority, b.priority)
    } else {
      return compareAsc(a.dueDate, b.dueDate)
    }
  }
  console.log(categories[category])
}