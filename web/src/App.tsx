import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Rota from './routes';
import './assets/styles/global.css';


function App() {
  return (
    <Router>
<Rota/>
</Router>
 );
}

export default App;
