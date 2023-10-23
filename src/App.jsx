import { Route, Routes } from 'react-router-dom'
import { useState } from "react";

import './App.css'

import Portfolio from './components/Portfolio/Portfolio';

function App() {

  const [darkMode, setDarkMode] = useState(true);

  const handleModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
    <Routes>
    <Route
        path="/"
        element={<Portfolio darkMode={darkMode} setDarkMode={handleModeToggle} />}
      />    
    </Routes>
      
    </>
  )
}

export default App
