import { compareAsc } from "date-fns"

export function placeItem(category, item) {
  if (category.length <= 0) {
    category = []
  }
  console.log(category)
  category.push(item)
  sortItems()
}

function sortItems(category) {
  category.sort((a, b) => compareAsc(a.dueDate, b.dueDate))
}