import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs';
import Alerts from './components/Alerts';
import { useState } from 'react';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  
const [mode,setMode] = useState('light');
const [modeText,setModeText] = useState('Dark Mode');
const [alert,setAlert] = useState(null);

let toggleMode=()=>{
  if(mode === 'dark'){
    setModeText('Dark Mode');
    setMode('light')
    document.body.style.backgroundColor ='white'
    showAlerts("Light Mode Enabled","success")
  }

  if(mode === 'light'){
    setModeText('Light Mode');
    setMode('dark')
    document.body.style.backgroundColor ='#191948'
    showAlerts("Dark Mode Enabled","success")
  }
  
}

let showAlerts=(message,msgType)=>{
  setAlert({
    msg : message,
    type : msgType
  })

  setTimeout(() => {
    setAlert(null);
  }, 1000);
}



  return (

    // we are using this tag bcz in JSX we can only return a single tag that's why we are enclosing all the things under this one tag
     <>                           

<Router>

<Navbar  title={"TextWare"}  mode={mode}  modeText={modeText} toggleMode={toggleMode} />    {/* This is an imported component from Navbar.js file  */}

<Alerts alert={alert}  />

{/* <TextForm  mode={mode}  /> */}


<Routes>
          <Route  exact path="/AboutUs" element={ <AboutUs/> }>
            </Route>

          <Route  exact path="/" element={ <TextForm  mode={mode}  />}  >
          </Route>
</Routes>

</Router>


{/* <AboutUs/> */}


   {/* we are using this cloding tag bcz in JSX we can only return a single tag that's why we are enclosing all the things under this one tag */}
   </> 


  );
}

export default App;
