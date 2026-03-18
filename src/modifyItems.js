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

window.getItem = getItem
window.updateTitle = updateTitle