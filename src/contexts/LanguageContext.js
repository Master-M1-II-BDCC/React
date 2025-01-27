import React, { createContext, useMemo, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('fr');

    const translations = {
        fr: {
            catalogTitle: "Catalogue de Produits",
            lightMode: "Mode Clair",
            darkMode: "Mode Sombre",
            loading: "Chargement...",
            error: "Erreur",
            priceLabel: "Prix",
            noProducts: "Aucun produit trouvé.",
            searchPlaceholder: "Rechercher un produit...",
        },
        en: {
            catalogTitle: "Product Catalog",
            lightMode: "Light Mode",
            darkMode: "Dark Mode",
            loading: "Loading...",
            error: "Error",
            priceLabel: "Price",
            noProducts: "No products found.",
            searchPlaceholder: "Search for a product...",
        },
    };

    const value = useMemo(() => ({
        language,
        setLanguage,
        translations: translations[language],
    }), [language]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}