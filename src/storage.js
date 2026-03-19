import { categories } from "./categories.js";
import { updateCategory } from "./modifyItems.js";
import { deleteItem } from "./view.js";

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