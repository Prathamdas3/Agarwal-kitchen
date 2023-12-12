import * as Yup from 'yup'
export const recipeFromSchema = Yup.object({
  link: Yup.string().min(2).required('Link is required'),
  title: Yup.string().min(2).required('Title is required'),
  ingredients: Yup.string().min(2).required('Ingredients are required'),
  process: Yup.string().min(2).required('Process is required'),
})
