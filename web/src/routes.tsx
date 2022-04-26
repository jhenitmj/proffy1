import React from "react";
import { Routes, Route } from "react-router-dom";
import Open from './pages/open';
import FormProf from "./pages/formProf";
import ListProfe from './pages/listProffy';


function Rota(){

    return(
    <Routes>
    <Route path="/" element={<Open/>}/>
    <Route path="/listProf" element={<ListProfe/>}/>
    <Route path="/formProf" element={<FormProf/>}/>
   </Routes>
   );
}

export default Rota;