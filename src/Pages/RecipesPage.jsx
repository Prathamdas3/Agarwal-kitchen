import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import '../styles/recipePage.css'
import Navbar from '../components/Navbar'
import Card from '../components/card'
import Footer from '../components/Footer'
import { FiSearch } from 'react-icons/fi'
import { X } from 'phosphor-react'
import { useRecipeContextProvider } from '../context/RecipeContext'
import Pagination from '../components/Pagination'

export default function RecipesPage() {
  const { allData } = useRecipeContextProvider()
  const [filterData, setFilterData] = useState([])
  const [searchText, setSearchText] = useState('')
  const [searchParams, setSearchParams] = useSearchParams({
    page: '1',
    per_page: '6',
    id: '',
  })

  const page_count =
    allData !== undefined
      ? Math.ceil(allData?.length / Number(searchParams.get('per_page')))
      : 1

  const start =
    (Number(searchParams.get('page')) - 1) *
    Number(searchParams.get('per_page'))
  const end = start + Number(searchParams.get('per_page'))

  const entries = allData?.slice(start, end)

  const handleSearch = (event) => {
    const searchWord = event.target.value
    setSearchText(event.target.value)
    const newFilterData = allData.filter((value) => {
      return value.title.toLowerCase().includes(searchText.toLowerCase())
    })
    searchWord === '' ? setFilterData([]) : setFilterData(newFilterData)
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-center fw-bold mt-5 mb-1">Fresh Recipes</h1>
        <p className="text-center letter-style">
          Enjoy your every meal with new recipes
        </p>
        <div className="d-flex justify-content-center gap-2 my-2">
          <input
            className=" custom_input"
            placeholder="Recipe Name"
            onChange={handleSearch}
          />
          {filterData.length !== 0 && (
            <div className="searchModal  position-absolute z-50 rounded-2 mt-5 h-52 overflow-y-auto overflow-x-hidden d-flex justify-content-center flex-column">
              {filterData.map((value) => (
                <Link
                  to={`/recipes/${value.id}`}
                  className="searchData mx-auto  px-4 py-2  "
                >
                  <p>{value.title}</p>
                </Link>
              ))}
            </div>
          )}
          {searchText.length != 0 ? (
            <X
              size={24}
              onClick={() => setFilterData([]) || setSearchText('')}
            />
          ) : (
            <FiSearch size={24} />
          )}
        </div>
        {entries.map((data) => (
          <Card
            key={data.id}
            details={data}
            setSearchParams={setSearchParams}
          />
        ))}
        <div className="d-flex justify-content-center">
          <Pagination
            page_count={page_count}
            start={start}
            end={end}
            length={allData.length}
            setSearchParams={setSearchParams}
            searchParams={searchParams}
          />
        </div>
      </div>

      <Footer />
    </>
  )
}
