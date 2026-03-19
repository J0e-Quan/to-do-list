import { placeItem, sortItems } from "./view.js";

function updateTitle(item, newTitle) {
  if (newTitle !== '') {
    item.title = newTitle
  }
}

function updateDescription(item, newDescription) {
  if (newDescription !== '') {
    item.description = newDescription
  }
}

function updateDueDate(item, newDueDate) {
  if (newDueDate !== '') {
    item.dueDate = newDueDate
    sortItems(item.category)
  }
}

function updatePriority(item, newPriority) {
  if (newPriority !== '') {
    item.priority = newPriority
    sortItems(item.category)
  }
}

export function updateCategory(item, newCategory) {
  if (newCategory !== '') {
    item.category = newCategory
    placeItem(item)
  }
}

window.updateDueDate = updateDueDate
window.updatePriority = updatePriority
window.updateCategory = updateCategory