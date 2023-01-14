
import './App.css';
import {useEffect,useState} from "react";
import { Route, Routes, Link } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';

function App( ) { 
  return (
    <div className="App">
      <Link to="/elaqe">Kontakt sehifesine daxil ol</Link><br/>
      <Link to="/haqqimizda">About sehifesine daxil ol</Link>
      <Routes>
        <Route path="/elaqe" element={<Contact/>} />
        <Route path="/haqqimizda" element={<About/>} />
      </Routes>      
    </div>
  );
}
 
export default App; 
