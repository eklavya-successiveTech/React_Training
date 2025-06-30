"use client"
import { createContext, useState } from "react"

const LanguageContext = createContext();

const LanguageProvider = ({children}) =>{
    const[lang, setLang] = useState("en");

    const langSwitcher = () =>{
        setLang((prev)=>("en" === prev ? "es" : "en"));
    }

    return(
        <LanguageContext.Provider value={{lang, langSwitcher}}>
            {children}
        </LanguageContext.Provider>
    )
}

export {LanguageContext, LanguageProvider};
