import { categories } from "./categories.js"

const newCategoryBtn = document.querySelector('.new-category')

export function renderNewCategoryForm() {
  const newCategoryForm = document.createElement('div')
  newCategoryForm.classList.add('new-category-form')
  const newCategoryFormBox = document.createElement('input')
  newCategoryFormBox.classList.add('new-category-form', 'box')
  newCategoryFormBox.pattern = '/^[\\p{L}\\s]+$/u'
  newCategoryFormBox.placeholder = 'new category'
  newCategoryForm.appendChild(newCategoryFormBox)
  const newCategoryFormBtn = document.createElement('button')
  newCategoryFormBtn.type = 'button'
  newCategoryFormBtn.textContent = '✓'
  newCategoryFormBtn.classList.add('new-category-form', 'btn')
  newCategoryForm.appendChild(newCategoryFormBtn)
  newCategoryBtn.appendChild(newCategoryForm)
    newCategoryBtn.classList.add('disabled')
  return newCategoryFormBtn
}

export function removeNewCategoryForm() {
  const newCategoryForm = document.querySelector('.new-category-form')
  newCategoryForm.remove()
  newCategoryBtn.classList.remove('disabled')
}

export function renderNewCategory(name) {
  const category = document.createElement('button')
  category.type = 'button'
  category.classList.add('category')
  category.textContent = name
  newCategoryBtn.before(category)
  const deleteBtn = document.createElement('button')
  deleteBtn.type = 'button'
  deleteBtn.classList.add('delete-category')
  deleteBtn.innerHTML = '<svg class="delete-category-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" width="100%" height="100%" enable-background="new 0 0 50 50" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.289,14.211h3.102l1.444,25.439c0.029,0.529,0.468,0.943,0.998,0.943h18.933 c0.53,0,0.969-0.415,0.998-0.944l1.421-25.438h3.104c0.553,0,1-0.448,1-1s-0.447-1-1-1h-3.741c-0.055,0-0.103,0.023-0.156,0.031 c-0.052-0.008-0.1-0.031-0.153-0.031h-5.246V9.594c0-0.552-0.447-1-1-1h-9.409c-0.553,0-1,0.448-1,1v2.617h-5.248 c-0.046,0-0.087,0.021-0.132,0.027c-0.046-0.007-0.087-0.027-0.135-0.027h-3.779c-0.553,0-1,0.448-1,1S9.736,14.211,10.289,14.211z M21.584,10.594h7.409v1.617h-7.409V10.594z M35.182,14.211L33.82,38.594H16.778l-1.384-24.383H35.182z"></path> <path d="M20.337,36.719c0.02,0,0.038,0,0.058-0.001c0.552-0.031,0.973-0.504,0.941-1.055l-1.052-18.535 c-0.031-0.552-0.517-0.967-1.055-0.942c-0.552,0.031-0.973,0.504-0.941,1.055l1.052,18.535 C19.37,36.308,19.811,36.719,20.337,36.719z"></path> <path d="M30.147,36.718c0.02,0.001,0.038,0.001,0.058,0.001c0.526,0,0.967-0.411,0.997-0.943l1.052-18.535 c0.031-0.551-0.39-1.024-0.941-1.055c-0.543-0.023-1.023,0.39-1.055,0.942l-1.052,18.535C29.175,36.214,29.596,36.687,30.147,36.718 z"></path> <path d="M25.289,36.719c0.553,0,1-0.448,1-1V17.184c0-0.552-0.447-1-1-1s-1,0.448-1,1v18.535 C24.289,36.271,24.736,36.719,25.289,36.719z"></path> </g></svg>'
  newCategoryBtn.before(deleteBtn)
}

const content = document.querySelector('.content')

export function renderNewItemForm() {
  const blurDiv = document.createElement('div')
  blurDiv.classList.add('darken')
  document.body.appendChild(blurDiv)
  const itemForm = document.createElement('div')
  itemForm.classList.add('item-form')
  const submitBtn = document.createElement('button')
  submitBtn.type = 'button'
  submitBtn.classList.add('item-form', 'submit')
  submitBtn.textContent = '✓'
  itemForm.appendChild(submitBtn)
  const titleBox = document.createElement('input')
  titleBox.type = 'text'
  titleBox.placeholder = 'New item title'
  titleBox.classList.add('item-form', 'title')
  itemForm.appendChild(titleBox)
  const dueDateBox = document.createElement('input')
  dueDateBox.type = 'date'
  dueDateBox.classList.add('item-form', 'due-date')
  dueDateBox.valueAsDate = new Date()
  itemForm.appendChild(dueDateBox)
  const descriptionBox = document.createElement('textarea')
  descriptionBox.classList.add('item-form', 'description')
  descriptionBox.placeholder = 'Input item details here (OPTIONAL)'
  itemForm.appendChild(descriptionBox)
  const prioritySelector = document.createElement('select')
  prioritySelector.classList.add('item-form', 'priority-selector')
  const highPriority = document.createElement('option')
  highPriority.value = 1
  highPriority.textContent = 'High'
  prioritySelector.appendChild(highPriority)
  const mediumPriority = document.createElement('option')
  mediumPriority.value = 2
  mediumPriority.textContent = 'Medium'
  prioritySelector.appendChild(mediumPriority)
  const lowPriority = document.createElement('option')
  lowPriority.value = 3
  lowPriority.textContent = 'Low'
  prioritySelector.appendChild(lowPriority)
  itemForm.appendChild(prioritySelector)
  const categorySelector = document.createElement('select')
  categorySelector.classList.add('item-form', 'category-selector')
  generateCategoryOptions(categorySelector)
  itemForm.appendChild(categorySelector)
  const deleteBtn = document.createElement('button')
  deleteBtn.type = 'button'
  deleteBtn.classList.add('item-form', 'delete')
  deleteBtn.textContent = 'Cancel'
  itemForm.appendChild(deleteBtn)
  blurDiv.appendChild(itemForm)
}

function generateCategoryOptions(categorySelector) {
  const allCategories = Object.getOwnPropertyNames(categories)
  for (let i = 0; i < allCategories.length; i ++) {
    const categoryName = allCategories[i]
    if (categoryName !== 'Completed') {
      const categoryOption = document.createElement('option')
      categoryOption.value = categoryName
      categoryOption.textContent = categoryName
      categorySelector.appendChild(categoryOption)
    }
  }
}

export function removeNewItemForm() {
  const blurDiv = document.querySelector('.darken')
  blurDiv.remove()
}

export function submitNewItemForm() {
  const title = document.querySelector('.item-form.title').value
  const dueDate = document.querySelector('.item-form.due-date').value
  let description = document.querySelector('.item-form.description').value
  const category = document.querySelector('.item-form.category-selector').value
  const priority = document.querySelector('.item-form.priority-selector').value
  if (checkNewItemValidity(title, dueDate, category, priority)) {
    if (description === '') {
      description = 'No description'
    }
    removeNewItemForm()
    const newItem = { title, dueDate, description, category, priority}
    return newItem
  } else {
    return undefined
  }
}

function checkNewItemValidity(title, dueDate, category, priority) {
  if (title !== '' && dueDate !== '' && category !== '' && priority !== '') {
    return true
  } else {
    alert('Item is invalid! Please ensure you have inputted the title, due date, category and priority before submitting!')
    return false
  }
}

export function renderNewItem(item, targetId) {
  const itemBox = document.createElement('div')
  itemBox.classList.add('item-box')
  const submitBtn = document.createElement('button')
  submitBtn.type = 'button'
  submitBtn.classList.add('item-box', 'submit')
  submitBtn.textContent = '✓'
  itemBox.appendChild(submitBtn)
  const titleBox = document.createElement('h2')
  titleBox.textContent = item.title
  titleBox.classList.add('item-box', 'title')
  itemBox.appendChild(titleBox)
  const dueDateBox = document.createElement('h2')
  dueDateBox.classList.add('item-box', 'due-date')
  dueDateBox.textContent = item.dueDate
  itemBox.appendChild(dueDateBox)
  const expandArrow = document.createElement('button')
  expandArrow.type = 'button'
  expandArrow.classList.add('expand-arrow')
  expandArrow.textContent = '▽'  
  itemBox.appendChild(expandArrow)
  const expandableElements = document.createElement('div')
  expandableElements.classList.add('expandable')
  const descriptionBox = document.createElement('p')
  descriptionBox.classList.add('item-box', 'description')
  descriptionBox.textContent = item.description
  expandableElements.appendChild(descriptionBox)
  const priorityBox = document.createElement('h2')
  priorityBox.classList.add('item-box', 'priority')
  const priority = convertPriority(item.priority)
  priorityBox.textContent = 'Priority: ' + priority
  expandableElements.appendChild(priorityBox)
  const categoryBox = document.createElement('h2')
  categoryBox.classList.add('item-box', 'category')
  categoryBox.textContent = 'Category: ' + item.category
  expandableElements.appendChild(categoryBox)
  const editBtn = document.createElement('button')
  editBtn.type = 'button'
  editBtn.classList.add('item-box', 'edit')
  editBtn.textContent = 'Edit'
  expandableElements.appendChild(editBtn)
  const deleteBtn = document.createElement('button')
  deleteBtn.type = 'button'
  deleteBtn.classList.add('item-box', 'delete')
  deleteBtn.textContent = 'Delete'
  expandableElements.appendChild(deleteBtn)
  itemBox.appendChild(expandableElements)
  itemBox.id = targetId
  console.log(itemBox.id)
  content.appendChild(itemBox)
  const itemBoxContent = { itemBox, id: item.id, expandableElements, expandArrow }
  return itemBoxContent
}

function convertPriority(priorityNum) {
  if (priorityNum === '1') {
    return 'High'
  } else if (priorityNum === '2') {
    return 'Medium'
  } else if (priorityNum === '3') {
    return 'Low'
  }
}

export function removeItem(id) {
  const targetItemBox = document.getElementById(id)
  console.log(targetItemBox)
  targetItemBox.remove()
}

export function expandItem(expandableElements, expandArrow) {
  expandableElements.classList.remove('hidden')
  expandArrow.textContent = '△'
}

export function minimiseItem(expandableElements, expandArrow) {
  expandableElements.classList.add('hidden')
  expandArrow.textContent = '▽'
}

export function renderCategory(items) {
  // all children of content is replaced with nothing to clear content
  content.replaceChildren()
  if (items !== undefined) {
    for (const item of items) {
      renderNewItem(item, item.id)
    }
  }
}