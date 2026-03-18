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

function sortItems(category) {
  categories[category].sort((a, b) => compareAsc(a.dueDate, b.dueDate))
  console.log(categories[category])
}