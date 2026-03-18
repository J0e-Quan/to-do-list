import { categories } from "./categories.js";

let targetItem

function getItem(id) {
  const allCategories = Object.values(categories)
  for (const category of allCategories) {
    targetItem = category.find((item) => item.id === id)
    if (targetItem !== undefined) {
      console.log(targetItem)
      window.targetItem = targetItem
      return
    }
  }
  console.log('item not found!')
  window.targetItem = targetItem
}

function updateTitle(targetItem, newTitle) {
  if (newTitle !== '') {
    targetItem.title = newTitle
  }
}

function updateDescription(targetItem, newDescription) {
  if (newDescription !== '') {
    targetItem.description = newDescription
  }
}

function updateDueDate(targetItem, newDueDate) {
  if (newDueDate !== '') {
    targetItem.dueDate = newDueDate
  }
}

function updatePriority(targetItem, newPriority) {
  if (newPriority !== '') {
    targetItem.priority = newPriority
  }
}

function updateCategory(targetItem, newCategory) {
  if (newCategory !== '') {
    targetItem.category = newCategory
  }
}

window.getItem = getItem
window.updateDescription = updateDescription