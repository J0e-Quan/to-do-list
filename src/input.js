import { newCategory } from "./categories.js";
import { newItem } from "./item.js";
import { removeNewCategoryForm, renderNewCategory, renderNewCategoryForm } from "./ui.js";
import { viewCategory } from "./view.js";

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
  if (!category.classList.contains('new-category') && !category.classList.contains('new-category-form')) {
    const previousCategory = document.querySelector('.selected')
    if (previousCategory !== null) {
      previousCategory.classList.remove('selected')
    }
    category.classList.add('selected')
    viewCategory(category.textContent)
  }
}