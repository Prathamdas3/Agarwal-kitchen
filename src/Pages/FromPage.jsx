import { useRecipeContextProvider } from '../context/RecipeContext'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function FromPage() {
  const { formik } = useRecipeContextProvider()

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        {/* creating recipe card by the owner */}
        {/* input part starts */}
        <div>
          <h1 className="text-center my-3 fw-bold">
            Create New card of Recipes
          </h1>
          <form className="d-flex flex-column" onSubmit={formik.handleSubmit}>
            <label htmlFor="link" className=" fs-5 fw-medium">
              Today Video Link
            </label>
            <input
              type="text"
              name="link"
              id="link"
              autoComplete="off"
              placeholder="Link of the video"
              className="mb-3"
              value={formik.values.link}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.link && formik.touched.link ? (
              <p style={{ color: 'red' }}>*{formik.errors.link}</p>
            ) : null}

            <label htmlFor="title" className=" fs-5 fw-medium">
              Today Recipe Name
            </label>
            <input
              type="text"
              name="title"
              id="title"
              autoComplete="off"
              placeholder="What's cooking today?"
              className="mb-3"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.title && formik.touched.title ? (
              <p style={{ color: 'red' }}>* {formik.errors.title}</p>
            ) : null}

            <label htmlFor="ingredients" className="fs-5 fw-medium">
              Recipe Ingredients
            </label>
            <textarea
              name="ingredients"
              type="text"
              id="ingredients"
              cols="100"
              rows="5"
              className="mb-3"
              placeholder="What are the ingredients?"
              value={formik.values.ingredients}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
            {formik.errors.ingredients && formik.touched.ingredients ? (
              <p style={{ color: 'red' }}>*{formik.errors.ingredients}</p>
            ) : null}
            <label htmlFor="process" className=" fs-5 fw-medium">
              Recipe Process
            </label>
            <textarea
              cols="100"
              type="text"
              name="process"
              id="process"
              rows="10"
              autoComplete="off"
              className="mb-3"
              placeholder="How did you made this awesome recipe?"
              value={formik.values.process}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
            {formik.errors.process && formik.touched.process ? (
              <p style={{ color: 'red' }}>*{formik.errors.process}</p>
            ) : null}
            <div className="d-flex justify-content-end ">
              <button
                type="submit"
                className="px-3 py-2 rounded-3 bg-black border-0 text-white fw-semibold "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}
