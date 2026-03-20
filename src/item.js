import { deleteItem, moveTickedItem, placeItem } from "./view.js"
import { formatISO, parseISO } from "date-fns"
import { categories, retrieveStorage, updateStorage } from './categories.js'

retrieveStorage()
addTick()
addUntick()
addDelete()

export function newItem(inputTitle, inputDescription, inputDueDate, inputPriority, inputCategory) {
  const title = inputTitle
  const description = inputDescription
  const dueDate = formatISO(parseISO(inputDueDate), { representation: 'date'})
  const priority = inputPriority
  const category = inputCategory
  const _id = crypto.randomUUID()
  const isTicked = false
  const item = {title, description, dueDate, priority, category, isTicked, get id() {return _id}}
  placeItem(item)
  addTick()
  addUntick()
  addDelete()
  updateStorage()
  console.log(item.id)
  return item.id
}

export function addTick() {
  Object.values(categories).forEach((category) => {
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