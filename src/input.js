import { getItem, newCategory, removeCategory } from "./categories.js";
import { newItem } from "./item.js";
import { expandItem, minimiseItem, removeItem, removeNewCategoryForm, removeNewItemForm, renderCategory, renderNewCategory, renderNewCategoryForm, renderNewItem, renderNewItemForm, submitNewItemForm } from "./ui.js";
import { deleteItem, viewCategory } from "./view.js";

const newCategoryBtn = document.querySelector('.new-category')

newCategoryBtn.addEventListener('click', createNewCategoryForm)

function createNewCategoryForm() {
  const NewCategoryFormBtn = renderNewCategoryForm()
  NewCategoryFormBtn.addEventListener('click', createNewCategory)
  newCategoryBtn.removeEventListener('click', createNewCategoryForm)
}

function createNewCategory() {
  const NewCategoryFormBox = document.querySelector('.new-category-form.box')
  const categoryName = (NewCategoryFormBox.value).trim()
  const format = /^[\p{L}\s]+$/u
  if (categoryName !== '' && format.test(categoryName)) {
    newCategory(categoryName)
    removeNewCategoryForm()
    renderNewCategory(categoryName)
    setTimeout(() => {
     newCategoryBtn.addEventListener('click', createNewCategoryForm)
    }, 10); // 10ms
  } else if (categoryName === '') {
    alert('Category name cannot be empty!')
  } else if (format.test(categoryName) === false) {
    alert('Category name cannot accept numbers and symbols!')
  }
}

const categories = document.querySelector('.categories')

categories.addEventListener('click', selectCategory)

function selectCategory(btn) {
  const category = btn.target
  if (category.classList.contains('delete-category')) {
    const deleteBtn = btn.target
    const targetCategory = deleteBtn.previousElementSibling
    removeCategory(targetCategory.textContent)
    targetCategory.remove()
    deleteBtn.remove()
  } else if (!category.classList.contains('new-category') && !category.classList.contains('new-category-form' && !category.classList.contains('delete-category'))) {
    console.log('selecting category')
    const previousCategory = document.querySelector('.selected')
    if (previousCategory !== null) {
      previousCategory.classList.remove('selected')
    }
    if (category.textContent === 'Completed') {
      const addBtn = document.querySelector('.new-item')
      addBtn.classList.add('hidden')
    } else if (category.textContent !== 'Completed') {
      const addBtn = document.querySelector('.new-item')
      addBtn.classList.remove('hidden')      
    }
    category.classList.add('selected')
    renderCategory(category.textContent)
    addButtons()
  } 
}

const newItemBtn = document.querySelector('.new-item')
newItemBtn.addEventListener('click', createNewItem)

function createNewItem(existingTitle, existingDueDate, existingDescription, existingPriority, existingCategory) {
  renderNewItemForm(existingTitle, existingDueDate, existingDescription, existingPriority, existingCategory)
  const deleteBtn = document.querySelector('.item-form.delete')
  deleteBtn.addEventListener('click', () => removeNewItemForm())
  const submitBtn = document.querySelector('.item-form.submit')
  submitBtn.addEventListener('click', submitNewItem)
}

function submitNewItem() {
  const item = submitNewItemForm()
  if (item !== undefined) {
    const targetId = newItem( item.title, item.description, item.dueDate, item.priority, item.category)
    renderNewItem(item, targetId)
    addButtons()
  }
}

export function addButtons() {
  const allItemBoxes = document.querySelectorAll('[class="item-box"]')
  allItemBoxes.forEach((itemBox) => {
    const expandableElements = itemBox.querySelector('.expandable')
    const expandArrow = itemBox.querySelector('.expand-arrow')
    const targetId = itemBox.id
    // event listener is removed then readded to prevent having more than 1 event listener
    itemBox.removeEventListener('click', manageItem.bind(null, targetId, expandableElements, expandArrow))
    itemBox.addEventListener('click', manageItem.bind(null, targetId, expandableElements, expandArrow))
  })
}

function manageItem(id, expandableElements, expandArrow, btn) {
  const target = btn.target
  if (target.classList.contains('delete')) {
    deleteItem(id)
    removeItem(id)
  } else if (target.classList.contains('edit')) {
    const targetItem = getItem(id)
    deleteItem(id)
    removeItem(id)
    createNewItem(targetItem.title, targetItem.dueDate, targetItem.description, targetItem.priority, targetItem.category)
  } else if (target.classList.contains('submit')) {
    const targetItem = getItem(id)
    if (targetItem.isTicked === false) {
      targetItem.tick()
    } else if (targetItem.isTicked === true) {
      targetItem.untick()
    }
  } else if (target.classList.contains('expand-arrow')) {
    if (target.textContent === '▽') {
      expandItem(expandableElements, expandArrow)
    } else if (target.textContent === '△') {
      minimiseItem(expandableElements, expandArrow)
    }
  }
}