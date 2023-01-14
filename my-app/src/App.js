
import './App.css';
import {useEffect,useState} from "react";
import { Route, Routes } from 'react-router-dom';

function App( ) {
 
 
  return (
    <div className="App">
      <Routes>
        <Route path='/elaqe' element={Contact} />
        <Route path='/haqqimizda' element={About} />
      </Routes>      
    </div>
  );
}
 
export default App; 
