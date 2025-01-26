import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../App';
import useDebounce from '../hooks/useDebounce';

const ProductSearch = ({searchTerm , setSearchTerm}) => {
  const [localSearch , setLocalSearch] = useState(searchTerm);
  const { isDarkTheme } = useContext(ThemeContext);
  // TODO: Exercice 2.1 - Utiliser le LanguageContext
  
  // TODO: Exercice 1.2 - Utiliser le hook useDebounce
  const debouncedSearchTerm = useDebounce(localSearch , 500);

  useEffect(() => {
    setSearchTerm(debouncedSearchTerm)
  }, [debouncedSearchTerm, searchTerm])

  return (
    <div className="mb-4">
      <input
        type="text"
        value={localSearch}
        onChange={(e) => setLocalSearch(e.target.value)}
        placeholder="Rechercher un produit..."
        className={`form-control ${isDarkTheme ? 'bg-dark text-light' : ''}`}
      />
    </div>
  );
};

export default ProductSearch;