import { useState, useEffect, createContext, useContext } from 'react';

//creating context
const apiContext = createContext();

//distributing the context
export const ContextProvider = ({ children }) => {
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [process, setProcess] = useState('');

  const data = { setLink, setTitle, setIngredients, setProcess };
  return <apiContext.Provider value={data}>{children}</apiContext.Provider>;
};

//using the custom hooks to distribute the context easily
export const useRecipeContextProvider = () => {
  const contextData = useContext(apiContext);
  if (!contextData) {
    throw new Error('context must be used inside the provider');
  }
  return contextData;
};
