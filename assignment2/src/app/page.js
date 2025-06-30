"use client"
import Link from "next/link";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { LanguageContext } from "./context/LanguageContext";
import LangSwitcher from "./components/LangSwitcher";

const translations = {
  en: {
    heading: "React Assignment 2",
    counterLink: "Counter Component",
    formLink: "Person Form Component",
    todoLink: "Todo Component",
    rngLink: "Random Number Generator Component",
    counterStepLink: "Step Counter Component",
    clockLink: "Clock Component",
    notifiLink: "Notification Component",
    slideshowLink: "Slide Show Component",
    shoppingLink: "Shopping Cart Component",
    votingLink: "Voting App Component",
    ParentChildLink: "ParentChild Component",
    studentListLink: "Student List Component",
    employeeListLink: "Employee List Component",
    preferenceLink: "Preferences Component",
    delayLink: "Time Delay Component",
    switchToSpanish: "Switch to Spanish",
    switchToEnglish: "Switch to English",
  },
  es: {
    heading: "Asignación de React 2",
    counterLink: "Componente de Contador",
    formLink: "Formulario de Persona",
    todoLink: "Componente de Tareas",
    rngLink: "Generador de Números Aleatorios",
    counterStepLink: "Componente de Contador de Pasos",
    clockLink: "Componente de Reloj",
    notifiLink: "Componente de Notificaciones",
    slideshowLink: "Componente de Presentación de Imágenes",
    shoppingLink:  "Carrito de Compras",
    switchToSpanish: "Cambiar a Español",
    switchToEnglish: "Cambiar a Inglés",
  },
};
export default function Home() {
  const {theme} = useContext(ThemeContext);
  const {lang} =  useContext(LanguageContext);
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);
    return (
    <div className="container">
      <ThemeSwitcher />
      <LangSwitcher />
      <h1>{translations[lang].heading}</h1>
      <ul>
        <li>
          <Link href="/counter">{translations[lang].counterLink}</Link>
        </li>
        <li>
          <Link href="/form">{translations[lang].formLink}</Link>
        </li>
        <li>
          <Link href="/todo">{translations[lang].todoLink}</Link>
        </li>
        <li>
          <Link href="/rng">{translations[lang].rngLink}</Link>
        </li>
        <li>
          <Link href="/counterWithStep">{translations[lang].counterStepLink}</Link>
        </li>
        <li>
          <Link href="/clock">{translations[lang].clockLink}</Link>
        </li>
        <li>
          <Link href="/notifi">{translations[lang].notifiLink}</Link>
        </li>
        <li>
          <Link href="/slideshow">{translations[lang].slideshowLink}</Link>
        </li>
        <li>
          <Link href="/shopping">{translations[lang].shoppingLink}</Link>
        </li>
        <li>
          <Link href="/votingApp">{translations[lang].votingLink}</Link>
        </li>
        <li>
          <Link href="/parent-child">{translations[lang].ParentChildLink}</Link>
        </li>
        <li>
          <Link href="/studentList">{translations[lang].studentListLink}</Link>
        </li>
        <li>
          <Link href="/employee">{translations[lang].employeeListLink}</Link>
        </li>
        <li>
          <Link href="/preferences">{translations[lang].preferenceLink}</Link>
        </li>
        <li>
          <Link href="/timeDelay">{translations[lang].delayLink}</Link>
        </li>
      </ul>
    </div>
  );
}