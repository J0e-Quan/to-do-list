import { placeItem } from "./view.js"
import { parseISO } from "date-fns"

export function newItem(inputTitle, inputDescription, inputDueDate, inputPriority, inputCategory) {
  let title = inputTitle
  let description = inputDescription
  let dueDate = parseISO(inputDueDate)
  let priority = inputPriority
  let category = inputCategory
  let id = crypto.randomUUID()
  let isTicked = false
  const item = {title, description, dueDate, priority, category, id, isTicked}
  placeItem(category, item)
  addComplete(category)
  addDelete(category)
  console.log(item)
  return {item}
}

function addComplete(category) {
  category.forEach(item => {
    if (!Object.hasOwn(item, 'isTicked')) {
      item.tick = function() {
        item.isTicked = true
        // code for ticking items
      }
    }
  });
} 

function addDelete(category) {
  category.forEach(item => {
    if (!Object.hasOwn(item, 'deleteItem')) {
      item.deleteItem = function() {
        // delete the item from localStorage and array
      }
    }
  });
} 