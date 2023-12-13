import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
const LandingPage = lazy(() => import('./Pages/landingPage'))
const RecipesPage = lazy(() => import('./Pages/RecipesPage'))
const DetailsPage = lazy(() => import('./Pages/DetailsPage'))
const FromPage = lazy(() => import('./Pages/FromPage'))
const NotFoundPage = lazy(() => import('./Pages/NotFoundPage'))
import Loading from './assets/Images/loading.gif'

export default function App() {
  return (
    <>
      <Suspense
        fallback={
          <div
            className=" d-flex flex-column justify-content-center align-items-center"
            style={{ height: '100vh' }}
          >
            <img src={Loading} alt="loading" />
          </div>
        }
      >
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/recipes" element={<RecipesPage />} />
          <Route exact path="/recipes/:id" element={<DetailsPage />} />
          <Route exact path="/recipes/form" element={<FromPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  )
}
