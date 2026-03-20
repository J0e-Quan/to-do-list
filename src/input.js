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
    const deletebtn = btn.target
    const targetCategory = deletebtn.previousElementSibling
    removeCategory(targetCategory.textContent)
    targetCategory.remove()
    deletebtn.remove()
  } else if (!category.classList.contains('new-category') && !category.classList.contains('new-category-form' && !category.classList.contains('delete-category'))) {
    console.log('selecting category')
    const previousCategory = document.querySelector('.selected')
    if (previousCategory !== null) {
      previousCategory.classList.remove('selected')
    }
    category.classList.add('selected')
    const items = viewCategory(category.textContent)
    renderCategory(items)
  } 
}

const newItemBtn = document.querySelector('.new-item')
newItemBtn.addEventListener('click', createNewItem)

function createNewItem() {
  renderNewItemForm()
  const deleteBtn = document.querySelector('.item-form.delete')
  deleteBtn.addEventListener('click', () => removeNewItemForm())
  const submitBtn = document.querySelector('.item-form.submit')
  submitBtn.addEventListener('click', submitNewItem)
}

function submitNewItem() {
  const item = submitNewItemForm()
  console.log(item)
  if (item !== undefined) {
    const targetId = newItem( item.title, item.description, item.dueDate, item.priority, item.category)
    const itemBoxContent = renderNewItem(item, targetId)
    itemBoxContent.itemBox.addEventListener('click', manageItem.bind(null, targetId, itemBoxContent.expandableElements, itemBoxContent.expandArrow))
  }
}

function manageItem(id, expandableElements, expandArrow, btn) {
  const target = btn.target
  if (target.classList.contains('delete')) {
    deleteItem(id)
    removeItem(id)
  } else if (target.classList.contains('submit')) {
    const targetItem = getItem(id)
    targetItem.tick()
  } else if (target.classList.contains('expand-arrow')) {
    if (target.textContent === '▽') {
      expandItem(expandableElements, expandArrow)
    } else if (target.textContent === '△') {
      minimiseItem(expandableElements, expandArrow)
    }
  }
}