import React from 'react'
import { Routes, Route, } from "react-router-dom";
import HeroPage from './Pages/HeroPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HeroPage />} />
      </Routes>
    </div>
  );
}

export default App