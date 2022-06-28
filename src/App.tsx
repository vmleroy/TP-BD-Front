import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from './pages/Home/Home'
import Aluguel from "./pages/Aluguel/Aluguel";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aluguel" element={<Aluguel />} />
      </Routes>
    </Router>
  );
};

export default App;