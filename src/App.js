import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cv from './Pages/Cv';
import './App.css';
import DarkMode from './Components/DarkMode'


function App() {
  return (
    <Router>
    <div className="site-container" >
      <header className="site-header">
        <Menu/>
      </header>
      <main className='site-content'>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/about' element = {<About/>}/>
          <Route path='/cv' element = {<Cv/>}/>
          <Route path='/contact' element = {<Contact/>}/>
        </Routes>
      </main>
      <footer className='site-footer'>
        <Footer/>
      </footer>
    </div>
    </Router>
  );
}
export default App;