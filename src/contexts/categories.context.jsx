import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';
import PRODUCTS from '../shop-datatest.json';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  // console.log("PRODUCTS::::32323232", PRODUCTS)
  // console.log("PRODUCTS::::value", value)

  return (
    <CategoriesContext.Provider value={PRODUCTS}>
      {children}
    </CategoriesContext.Provider>
  );
};
