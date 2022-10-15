import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  

  return (
    <div className="App ">
      <div className="container">
        <Weather defaultCity="London" />

        <footer className="text-center">
          This project was coded by Yuliya Gradobyk and is{" "}
          <a
            href="https://github.com/gradobyk/react-app2"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}


