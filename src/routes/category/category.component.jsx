import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../contexts/categories.context';

import { CategoryContainer, Title } from './category.styles';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  // useEffect(() => {
  //   setProducts(categoriesMap[category]);
  // }, [category, categoriesMap]);

  useEffect(() => {
    // setProducts((pre) => categoriesMap.map(n => categoriesMap[category]);
    console.log("categoriesMap::ewewewewewewew::", categoriesMap);
    const matchedObjects = [];
    Object.entries(categoriesMap).forEach(([key, nestedObject]) => {
      // Object.entries(nestedObject).forEach(([nestedKey, nestedValue]) => {
        if (key.toUpperCase() == category.toUpperCase()) {
          // console.log(key, nestedKey, nestedValue); // Or do something else with the nested object
          matchedObjects.push(nestedObject);
        }
      // });
    });
    console.log("result:::::",matchedObjects);
    setProducts(matchedObjects[0])
  }, []);


  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
