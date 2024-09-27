// import React from "react";
import Home from "./pages/Home";
import Combos from "./pages/Combos";
import Bebidas from "./pages/Bebidas";
import Tradicionais from "./pages/BTradicionais";
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Pedidos from "./pages/Pedidos";
import Detalhes from "./pages/Detalhes";


const RoutesApp = ( ) => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/combos" element={<Combos  />}/>
        <Route path="/bebidas" element={<Bebidas  />}/>
        <Route path="/tradicionais" element={<Tradicionais  />}/>
        <Route path="/pedido" element={<Pedidos  />}/>
        <Route path="/detalhes/:id" element={<Detalhes  />}/>
    </Routes>
  )
}
export default RoutesApp