import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../config/firebase';
import { useRecipeContextProvider } from '../context/RecipeContext';

export default function FromPage() {
  const navigate = useNavigate();
  const { setLink, setTitle, setIngredients, setProcess } =
    useRecipeContextProvider();
  // const dataCollectionRef = collection(db, 'data');

  // const saveData = async () => {
  //   await addDoc(dataCollectionRef, {
  //     link,
  //     title,
  //     ingredients,
  //     process,
  //     id: Date.now(),
  //   });
  //   navigate('/recipes');
  // };

  return (
    <div>hi</div>
    // <div className="container mx-auto">
    //   {/* creating recipe card by the owner */}
    //   {/* input part starts */}
    //   <div className="flex flex-col gap-4">
    //     <h1 className="block mb-2 text-md font-medium text-gray-900 dark:text-white text-center mt-4">
    //       Create New card of Recipes
    //     </h1>
    //     <div>
    //       <label
    //         htmlFor="text"
    //         className="block mb-4 text-md font-medium text-gray-900 dark:text-white "
    //       >
    //         Today Video Link
    //       </label>
    //       <input
    //         type="text"
    //         placeholder="Link of the video"
    //         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
    //         onChange={(e) => setLink(e.target.value)}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label
    //         htmlFor="text"
    //         className="block mb-4 text-md font-medium text-gray-900 dark:text-white "
    //       >
    //         Today Recipe Name
    //       </label>
    //       <input
    //         type="text"
    //         placeholder="What's cooking today?"
    //         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
    //         onChange={(e) => setTitle(e.target.value)}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label
    //         htmlFor="text"
    //         className="block mb-4 text-md font-medium text-gray-900 dark:text-white "
    //       >
    //         Recipe Ingredients
    //       </label>
    //       <textarea
    //         name=""
    //         cols="100"
    //         rows="5"
    //         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
    //         placeholder="What are the ingredients?"
    //         onChange={(e) => setIngredients(e.target.value)}
    //         required
    //       ></textarea>
    //     </div>
    //     <div>
    //       <label
    //         htmlFor="text"
    //         className="block mb-4 text-md font-medium text-gray-900 dark:text-white "
    //       >
    //         Recipe Process
    //       </label>
    //       <textarea
    //         name=""
    //         id=""
    //         cols="100"
    //         rows="10"
    //         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
    //         placeholder="What are the process?"
    //         onChange={(e) => setProcess(e.target.value)}
    //         required
    //       ></textarea>
    //     </div>
    //   </div>
    //   <button
    //     type="submit"
    //     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //     onClick={saveData}
    //   >
    //     Submit
    //   </button>
    // </div>
  );
}
