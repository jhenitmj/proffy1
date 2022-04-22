import React from 'react';
import Open from './pages/open';
import './assets/styles/global.css';
import {Routes, Route} from 'react-router-dom';
import FormProf from "./pages/formProf";
import ListProfe from './pages/listProffy';

function App() {
  return (
    /* <Routes>
    <Route path="/" element={<Open/>}/>
    <Route path="listProf" element={<ListProfe/>}/>
    <Route path="formProf" element={<FormProf/>}/>
   </Routes>*/

   <Open/>
  );
}

export default App;
