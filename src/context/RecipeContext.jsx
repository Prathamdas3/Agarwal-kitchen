import { useState, useEffect, createContext, useContext } from 'react'
import { useFormik } from 'formik'
import { db } from '../config/firebase'
import { getDocs, collection, addDoc } from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid'
import { recipeFromSchema } from '../schemas'

//creating context
const apiContext = createContext()

//distributing the context
export const ContextProvider = ({ children }) => {
  const [allData, setAllData] = useState([])
  const link = ''
  const title = ''
  const ingredients = ''
  const process = ''

  const dataCollectionRef = collection(db, 'data')

  //creating the data and storing it
  const saveData = async ({ link, title, ingredients, process }) => {
    await addDoc(dataCollectionRef, {
      link,
      title,
      ingredients,
      process,
      createdAt: Date.now(),
      id: uuidv4(),
    })
  }
  //formik support
  const formik = useFormik({
    initialValues: { link, title, ingredients, process },
    validationSchema: recipeFromSchema,
    onSubmit: (value, action) => {
      saveData(value)
      action.resetForm()
    },
  })

  // reading the data
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getDocs(dataCollectionRef)
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        setAllData(filteredData)
      } catch (error) {
        console.error(error)
      }
    }
    getData()
  }, [])

  const returnData = {
    allData,
    formik,
  }
  return (
    <apiContext.Provider value={returnData}>{children}</apiContext.Provider>
  )
}

//using the custom hooks to distribute the context easily
export const useRecipeContextProvider = () => {
  const contextData = useContext(apiContext)
  if (!contextData) {
    throw new Error('context must be used inside the provider')
  }
  return contextData
}
