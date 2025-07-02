"use client"
import Link from "next/link";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { LanguageContext } from "./context/LanguageContext";
import LangSwitcher from "./components/LangSwitcher";

const translations = {
  en: {
    q1: "Q1: Counter Component",
    q2: "Q2: Person Form",
    q3: "Q3: Todo List",
    q4: "Q4: Random Number Generator",
    q5: "Q5: Counter with Step",
    q6: "Q6: Clock",
    q7: "Q7: Notification",
    q8: "Q8: Image Slideshow",
    q9: "Q9: Theme & Preferences",
    q10: "Q10: Language Switcher",
    q11: "Q11: Shopping Cart",
    q12: "Q12: Voting App (useReducer)",
    q13: "Q13: Parent/Child Callback (useCallback)",
    q14: "Q14: Task Completion (useCallback)", 
    q15: "Q15: Student List (useMemo)",       
    q16: "Q16: Employee Salary (useMemo)",     
    q17_18: "Q17 & Q18: useClipboard & useLocalStorage",
    q19: "Q19: useTimer (Time Delay)",
  },
  es: {
    q1: "P1: Componente de Contador",
    q2: "P2: Formulario de Persona",
    q3: "P3: Lista de Tareas",
    q4: "P4: Generador de Números Aleatorios",
    q5: "P5: Contador con Paso",
    q6: "P6: Reloj",
    q7: "P7: Notificación",
    q8: "P8: Presentación de Diapositivas",
    q9: "P9: Tema y Preferencias",
    q10: "P10: Selector de Idioma",
    q11: "P11: Carrito de Compras",
    q12: "P12: Aplicación de Votación (useReducer)",
    q13: "P13: Callback Padre/Hijo (useCallback)",
    q14: "P14: Finalización de Tarea (useCallback)",
    q15: "P15: Lista de Estudiantes (useMemo)",       
    q16: "P16: Salario de Empleados (useMemo)",     
    q17_18: "P17 & P18: useClipboard & useLocalStorage",
    q19: "P19: useTimer (Retardo de Tiempo)",
  },
};

export default function Home() {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);
  
  useEffect(() => {
    document.body.className = '';
    if (theme === 'dark') {
      document.body.classList.add('dark');
    }
  }, [theme]);

  const t = translations[lang];

  return (
    <div className="container">
      <header className="page-header">
        <h1>{t.mainHeading}</h1>
        <div className="controls">
          <ThemeSwitcher />
          <LangSwitcher />
        </div>
      </header>
      
      {/* Group 1: useState */}
      <div className="question-group">
        <h2>{t.group1Heading}</h2>
        <ul>
          <li><Link href="/counter">{t.q1}</Link></li>
          <li><Link href="/form">{t.q2}</Link></li>
          <li><Link href="/todo">{t.q3}</Link></li>
          <li><Link href="/rng">{t.q4}</Link></li>
          <li><Link href="/counterWithStep">{t.q5}</Link></li>
        </ul>
      </div>

      {/* Group 2: useEffect */}
      <div className="question-group">
        <h2>{t.group2Heading}</h2>
        <ul>
          <li><Link href="/clock">{t.q6}</Link></li>
          <li><Link href="/notifi">{t.q7}</Link></li>
          <li><Link href="/slideshow">{t.q8}</Link></li>
        </ul>
      </div>

      {/* Group 3: useContext */}
      <div className="question-group">
        <h2>{t.group3Heading}</h2>
        <ul>
          <li><Link href="/preferences">{t.q9}</Link></li>
          <li><Link href="#">{t.q10} (See controls at top)</Link></li>
          <li><Link href="/shopping">{t.q11}</Link></li>
        </ul>
      </div>

      {/* Group 4: Advanced Hooks */}
      <div className="question-group">
        <h2>{t.group4Heading}</h2>
        <ul>
          <li><Link href="/votingApp">{t.q12}</Link></li>
          <li><Link href="/parent-child">{t.q13}</Link></li>
          {/* Assuming you create a /taskList page for Q14 */}
          <li><Link href="/taskList">{t.q14}</Link></li> 
          <li><Link href="/studentList">{t.q15}</Link></li>
          <li><Link href="/employee">{t.q16}</Link></li>
        </ul>
      </div>
      
      {/* Group 5: Custom Hooks */}
      <div className="question-group">
        <h2>{t.group5Heading}</h2>
        <ul>
          {/* I've combined Q17 & Q18 as they both relate to user preferences */}
          <li><Link href="/preferences">{t.q17_18}</Link></li>
          <li><Link href="/timeDelay">{t.q19}</Link></li>
        </ul>
      </div>
    </div>
  );
}