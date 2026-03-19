import { deleteItem, placeItem } from "./view.js"
import { parseISO } from "date-fns"
import { categories } from "./categories.js"
import { updateCategory } from "./modifyItems.js"

export function newItem(inputTitle, inputDescription, inputDueDate, inputPriority, inputCategory) {
  let title = inputTitle
  let description = inputDescription
  let dueDate = parseISO(inputDueDate)
  let priority = inputPriority
  let category = inputCategory
  const _id = crypto.randomUUID()
  let isTicked = false
  const item = {title, description, dueDate, priority, category, isTicked, get id() {return _id}}
  placeItem(item)
  addComplete(category)
  addDelete(category)
  console.log(item.id)
  return {item}
}

export function addComplete(category) {
  categories[category].forEach(item => {
    if (!Object.hasOwn(item, 'isTicked')) {
      item.tick = function() {
        item.isTicked = true
        updateCategory(item, 'completed')
      }
    }
  });
} 

export function addDelete(category) {
  categories[category].forEach(item => {
    if (!Object.hasOwn(item, 'delete')) {
      item.delete = function() {
        deleteItem(item)
      }
    }
  });
} 

window.newItem = newItem
