import { Routes, Route } from 'react-router-dom';

import LandingPage from './Pages/landingPage';
import RecipesPage from './Pages/RecipesPage';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/recipes" element={<RecipesPage />} />
      </Routes>
    </>
  );
}

export default App;
