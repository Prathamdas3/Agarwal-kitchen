import { Routes, Route } from 'react-router-dom';

import LandingPage from './Pages/landingPage';
import RecipesPage from './Pages/RecipesPage';
import Navbar from './components/Navbar';
import DetailsPage from './Pages/DetailsPage';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/recipes" element={<RecipesPage />} />
        <Route exact path="/recipes/:id" element={<DetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
