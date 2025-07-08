import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

const LangSwitcher = () =>{
    const {lang, langSwitcher} = useContext(LanguageContext);

    return(
        <div>
            <p>Current language is {lang}</p>
            <button onClick={langSwitcher}>Change the language</button>
        </div>
    )
}
export default LangSwitcher;