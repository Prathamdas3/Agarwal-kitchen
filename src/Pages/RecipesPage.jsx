import '../styles/recipePage.css';
import Navbar from '../components/Navbar';
import Card from '../components/card';
import Footer from '../components/Footer';
import { FiSearch } from 'react-icons/fi';
import { useRecipeContextProvider } from '../context/RecipeContext';

export default function RecipesPage() {
  const { allData } = useRecipeContextProvider();
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-center fw-bold mt-5 mb-1">Fresh Recipes</h1>
        <p className="text-center letter-style">
          Enjoy your every meal with new recipes
        </p>
        <div className="d-flex justify-content-center gap-2 my-2">
          <input className=" custom_input" placeholder="Recipe Name" />
          <FiSearch size={24} />
        </div>
        {allData.map((data) => (
          <Card key={data.id} details={data} />
        ))}
      </div>
      <Footer />
    </>
  );
}
