import { newCategory } from "./categories.js";
import { newItem } from "./item.js";
import { removeNewCategoryForm, renderNewCategory, renderNewCategoryForm } from "./ui.js";

const newCategoryBtn = document.querySelector('.new-category')

newCategoryBtn.addEventListener('click', createNewCategoryForm)

function createNewCategoryForm() {
  const NewCategoryFormBtn = renderNewCategoryForm()
  NewCategoryFormBtn.addEventListener('click', createNewCategory)
  newCategoryBtn.removeEventListener('click', createNewCategoryForm)
}

function createNewCategory() {
  const NewCategoryFormBox = document.querySelector('.new-category-form-box')
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