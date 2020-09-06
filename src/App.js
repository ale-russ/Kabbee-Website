import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/header';
import MainBody from "./components/main__body";
//import LoginRegister from './components/login-register';



function App() {
  return (
          <div className="App">
            <Header />
            <MainBody />
          </div>
  );
}

export default App;