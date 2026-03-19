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
  return newCategoryFormBtn
}

export function removeNewCategoryForm() {
  const newCategoryForm = document.querySelector('.new-category-form')
  newCategoryForm.remove()
}

export function renderNewCategory(name) {
  const category = document.createElement('button')
  category.type = 'button'
  category.classList.add('category')
  category.textContent = name
  newCategoryBtn.before(category)
}

const content = document.querySelector('.content')

export function renderNewItem() {
  const itemBox = document.createElement('div')
  itemBox.classList.add('item-box')
  const tickBox = document.createElement('button')
  tickBox.type = 'button'
  tickBox.classList.add('tick-box', 'setup')
  tickBox.textContent = '✓'
  itemBox.appendChild(tickBox)
  const titleBox = document.createElement('input')
  titleBox.type = 'text'
  titleBox.placeholder = 'New item title'
  titleBox.classList.add('item-box', 'title')
  itemBox.appendChild(titleBox)
  const dueDateBox = document.createElement('input')
  dueDateBox.type = 'date'
  dueDateBox.classList.add('item-box', 'due-date')
  dueDateBox.valueAsDate = new Date()
  itemBox.appendChild(dueDateBox)
  const expandArrow = document.createElement('button')
  expandArrow.type = 'button'
  expandArrow.classList.add('expand-arrow')
  expandArrow.textContent = '△'  // down arrow symbol: ▽
  itemBox.appendChild(expandArrow)
  const descriptionBox = document.createElement('textarea')
  descriptionBox.classList.add('item-box', 'description')
  descriptionBox.placeholder = 'Input item details here'
  itemBox.appendChild(descriptionBox)
  const prioritySelector = document.createElement('select')
  prioritySelector.classList.add('item-box', 'priority-selector')
  // add code or helper function to generate all possible options
  itemBox.appendChild(prioritySelector)
  const deleteBtn = document.createElement('button')
  deleteBtn.type = 'button'
  deleteBtn.classList.add('item-box', 'delete')
  deleteBtn.textContent = 'Delete this item'
  itemBox.appendChild(deleteBtn)
  content.appendChild(itemBox)
}