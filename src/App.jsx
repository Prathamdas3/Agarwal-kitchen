import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/landingPage';
import RecipesPage from './Pages/RecipesPage';
import DetailsPage from './Pages/DetailsPage';
import FromPage from './Pages/FromPage';
import NotFoundPage from './Pages/NotFoundPage';

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/recipes" element={<RecipesPage />} />
        <Route exact path="/recipes/:id" element={<DetailsPage />} />
        <Route exact path="/xyz/form" element={<FromPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
