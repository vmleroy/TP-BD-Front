import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from './pages/Home/Home'
import Aluguel from "./pages/Aluguel/Aluguel";
import Cliente from "./pages/Cliente/Cliente";
import Carro from "./pages/Carro/Carro";
import Loja from "./pages/Loja/Loja";
import Vendedor from "./pages/Vendedor/Vendedor";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aluguel" element={<Aluguel />} />
        <Route path="/carro" element={<Carro />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/vedendor" element={<Vendedor />} />
      </Routes>
    </Router>
  );
};

export default App;