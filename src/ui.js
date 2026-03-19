const newCategoryBtn = document.querySelector('.new-category')

export function renderNewCategoryForm() {
  const newCategoryForm = document.createElement('div')
  newCategoryForm.classList.add('new-category-form')
  const newCategoryFormBox = document.createElement('input')
  newCategoryFormBox.classList.add('new-category-form', 'box')
  newCategoryFormBox.pattern = '/^[\\p{L}\\s]+$/u'
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