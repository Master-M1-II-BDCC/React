import React, { createContext, useContext, useState } from 'react';
import ProductList from './components/ProductList';
import ProductSearch from './components/ProductSearch';
import ThemeToggle from './components/ThemeToggle';
import { LanguageProvider, LanguageContext } from './contexts/LanguageContext';
import LanguageSelector from './components/LanguageSelector';

// TODO: Exercice 2.1 - Créer le LanguageContext
// j'ai créé e compo dans un fichier distinct (contexts/LanguageContext.js)

export const ThemeContext = createContext();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchTerm , setSearchTerm] = useState('');

  // TODO: Exercice 2.2 - Ajouter l'état pour la langue
  // L'état pour la langue est géré via le LanguageContext.

  const AppHeader = () => {
    const { translations } = useContext(LanguageContext);
    return <h1 className="text-center">{translations.catalogTitle}</h1>;
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {/* TODO: Exercice 2.1 - Wrapper avec LanguageContext.Provider */}
      <LanguageProvider>
      <div className={`container ${isDarkTheme ? 'bg-dark text-light' : 'bg-light'}`}>
        <header className="my-4">
          <AppHeader/>
          <div className="d-flex justify-content-end gap-2">
            <ThemeToggle />
            {/* TODO: Exercice 2.2 - Ajouter le sélecteur de langue */}
            <LanguageSelector/>
          </div>
        </header>
        <main>
          <ProductSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          <ProductList searchTerm={searchTerm}/>
        </main>
      </div>
      </LanguageProvider>
    </ThemeContext.Provider>
  );
};

export default App
