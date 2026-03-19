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
  const categoryName = NewCategoryFormBox.value
  if (categoryName !== '') {
    newCategory(categoryName)
    removeNewCategoryForm()
    renderNewCategory(categoryName)
    setTimeout(() => {
     newCategoryBtn.addEventListener('click', createNewCategoryForm)
    }, 10); // 10ms
  }
}