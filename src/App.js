import React from "react";

import "./App.css";
import LayOut from "./components/layout/LayOut";
import Lyrics from "./components/lyrics/Lyrics";
import NavBar from "./components/navBar/NavBar";
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom';


function App() {
  return (
  
    <Router>
      <NavBar />
      <Switch>
      <Route path='/' component={LayOut} exact/>
      <Route path='/Lyrics/:id' component={Lyrics} exact/>
      </Switch>

    </Router>
     
      

     
   
  );
}

export default App;
