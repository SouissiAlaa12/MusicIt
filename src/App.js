import React  from 'react';
import Music from './Music' ; 
import Nav from './Nav';
import Home from './Home' ; 
import './index.css';
import { BrowserRouter, Route,Switch } from "react-router-dom";

const App=()=>{


  
  return (
     <div className="App">
     <BrowserRouter>
      <Nav />
     
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/playlist" component={Music}/>
       
        </Switch>

    
       </BrowserRouter> 
        </div>
        
  ) ; 

  }
export default App;
