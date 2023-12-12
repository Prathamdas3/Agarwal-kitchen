import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useRecipeContextProvider } from '../context/RecipeContext'

export default function DetailsPage() {
  const { id } = useParams()

  const { allData } = useRecipeContextProvider()

  const details = allData.find((data) => data.id === id)
  const ingredientsList = []
  const processList = []
  ingredientsList.push(details.ingredients.split(','))
  processList.push(details.process.split(','))

  return (
    <>
      <Navbar />
      <div className="container d-flex flex-column">
        <div className=" mt-5 res-wrapper-details">
          <iframe
            width="100%"
            height="600"
            src={details.link}
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="res-details "
          ></iframe>
        </div>
        <h1 className="text-center fw-bold my-3" style={{ letterSpacing: 0.3 }}>
          {details.title}
        </h1>
        <div>
          <h3 className="fw-bold mb-2">Ingredients:</h3>
          <ol>
            {ingredientsList[0].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="fw-bold mb-2">Process:</h3>
          <ol>
            {processList[0].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
      <Footer />
    </>
  )
}
