import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [Language, setLanguage] = useState('fr');

    return (
        <LanguageContext.Provider value={{ Language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}