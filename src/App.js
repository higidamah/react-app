import React from "react";
import Weather from"./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York"/>
        <footer>
          This project was coded by {""} 
          <a href="https://incomparable-pudding-dfb1e2.netlify.app/" target="_blank" rel="noreferrer"> Damaris Higi</a> {""}
          and is {""}
        <a href="https://github.com/higidamah/react-app" target="_blank" rel="noreferrer">
         open-sourced on Github
        </a>
        </footer>
        
      </div>
     
    </div>
  );
}


