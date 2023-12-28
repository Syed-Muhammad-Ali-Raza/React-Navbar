import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import TopnavBar from './Navbar';
function App() {
  return (
  <>
 

  <BrowserRouter>
  <TopnavBar/>
  <Routes>
  
  <Route path='/' Component={Home} /> 

  <Route path='/contact' Component ={Contact}/>

  <Route path ='/about' Component={About}/>
  </Routes>
  </BrowserRouter>
  
  </>
  );
}

export default App;
