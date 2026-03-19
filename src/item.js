import { deleteItem, moveTickedItem, placeItem } from "./view.js"
import { parseISO } from "date-fns"
import { categories, retrieveStorage } from './categories.js'

retrieveStorage()
addTick()
addUntick()
addDelete()

export function newItem(inputTitle, inputDescription, inputDueDate, inputPriority, inputCategory) {
  const title = inputTitle
  const description = inputDescription
  const dueDate = parseISO(inputDueDate)
  const priority = inputPriority
  const category = inputCategory
  const _id = crypto.randomUUID()
  const isTicked = false
  const item = {title, description, dueDate, priority, category, isTicked, get id() {return _id}}
  placeItem(item)
  addTick()
  addUntick()
  addDelete()
  console.log(item.id)
  return {item}
}

export function addTick() {
  Object.values(categories).forEach((category) => {
    console.log(category)
    category.forEach(item => {
      if (!Object.hasOwn(item, 'tick')) {
      item.tick = function() {
        item.isTicked = true
        moveTickedItem(item)
      }
      }
    })
  })
}

export function addUntick() {
  Object.values(categories).forEach((category) => {
    console.log(category)
    category.forEach(item => {
      if (!Object.hasOwn(item, 'untick')) {
      item.untick = function() {
        item.isTicked = false
        moveTickedItem(item)
      }
      }
    })
  })
}

export function addDelete() {
  Object.values(categories).forEach((category) => {
    category.forEach(item => {
      if (!Object.hasOwn(item, 'delete')) {
      item.delete = function() {
        deleteItem(item)
      }
      }
    })
  })
} 

window.newItem = newItem