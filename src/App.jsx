import { useEffect, useState } from 'react'
import './App.css'
import Router from './router/Router'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      // once: true,  
    });
  }, []);
  return (
    <>
      <Router />
    </>
  )
}

export default App
