import { useRecipeContextProvider } from '../context/RecipeContext';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function FromPage() {
  const { saveData, setIngredients, setLink, setProcess, setTitle } =
    useRecipeContextProvider();
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
          <div className="d-flex flex-column">
            <label htmlFor="text" className=" fs-5 fw-medium">
              Today Video Link
            </label>
            <input
              type="text"
              placeholder="Link of the video"
              className="mb-3"
              onChange={(e) => setLink(e.target.value)}
              required
            />

            <label htmlFor="text" className=" fs-5 fw-medium">
              Today Recipe Name
            </label>
            <input
              type="text"
              placeholder="What's cooking today?"
              className="mb-3"
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <label htmlFor="text" className="fs-5 fw-medium">
              Recipe Ingredients
            </label>
            <textarea
              name=""
              cols="100"
              rows="5"
              className="mb-3"
              placeholder="What are the ingredients?"
              onChange={(e) => setIngredients(e.target.value)}
              required
            ></textarea>

            <label htmlFor="text" className=" fs-5 fw-medium">
              Recipe Process
            </label>
            <textarea
              cols="100"
              rows="10"
              className="mb-3"
              placeholder="How did you made this awesome recipe?"
              onChange={(e) => setProcess(e.target.value)}
              required
            ></textarea>
          </div>
        </div>
        <div className="d-flex justify-content-end ">
          <button
            type="submit"
            onClick={saveData}
            className="px-3 py-2 rounded-3 bg-black border-0 text-white fw-semibold "
          >
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
