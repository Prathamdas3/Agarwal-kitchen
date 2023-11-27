import { useState, useEffect, createContext, useContext } from 'react';
import { db } from '../config/firebase';
import { getDocs, collection, addDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

//creating context
const apiContext = createContext();

//distributing the context
export const ContextProvider = ({ children }) => {
  const [allData, setAllData] = useState([]);
  const [link, setLink] = useState(undefined);
  const [title, setTitle] = useState(undefined);
  const [ingredients, setIngredients] = useState(undefined);
  const [process, setProcess] = useState(undefined);

  const dataCollectionRef = collection(db, 'data');

  //creating the data and storing it
  const saveData = async () => {
    await addDoc(
      dataCollectionRef,
      link &&
        title &&
        ingredients &&
        process && {
          link,
          title,
          ingredients,
          process,
          createdAt: Date.now(),
          id: uuidv4(),
        }
    );
  };

  // reading the data
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getDocs(dataCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setAllData(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  const returnData = {
    setIngredients,
    setLink,
    setTitle,
    setProcess,
    saveData,
    allData,
  };
  return (
    <apiContext.Provider value={returnData}>{children}</apiContext.Provider>
  );
};

//using the custom hooks to distribute the context easily
export const useRecipeContextProvider = () => {
  const contextData = useContext(apiContext);
  if (!contextData) {
    throw new Error('context must be used inside the provider');
  }
  return contextData;
};
