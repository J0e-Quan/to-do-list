import { categories } from "./categories.js";

export function addComplete(category) {
  categories[category].forEach(item => {
    if (!Object.hasOwn(item, 'isTicked')) {
      item.tick = function() {
        item.isTicked = true
        // code for ticking items
      }
    }
  });
} 

export function addDelete(category) {
  categories[category].forEach(item => {
    if (!Object.hasOwn(item, 'deleteItem')) {
      item.deleteItem = function() {
        // delete the item from localStorage and array
      }
    }
  });
} 