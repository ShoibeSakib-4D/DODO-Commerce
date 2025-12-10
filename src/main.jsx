import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router";
import Router from "./router/Router";
import './index.css'


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <HashRouter>
    

       <Router></Router>
     
    
  </HashRouter>,
);
