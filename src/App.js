import { useState } from 'react';
import './App.css';
import About from './components/About';
import Info from './components/Info'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";



function App() {
  const [mode,setMode] = useState('light');
  const [Font,setFont] = useState('dark');

 const toggle = () => {
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#3D0C02';
    document.body.style.color = 'white';
    setFont('white');
  }else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    setFont('dark');
  }
 }

  return (
    <>
  <Router>
        <Navbar mode = {mode} Text = {Font} toggleChange = {toggle}/>
      <div className="container">
      <Routes>
            <Route exact path="/about" element={<About/>}/>
            
            <Route exact path="/" element={<Info mode = {mode}/>}/>
            
        </Routes>          
      </div>
  </Router>
    </>
 
  );
}

export default App;
