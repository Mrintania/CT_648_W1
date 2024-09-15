import React, { useState, useEffect } from "react";
import './App.css';

const App = () => {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });
    const data = await response.json();
    setJoke(data.joke);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-lg p-4 mb-4 bg-white rounded">
        <h1 className="text-center mb-4">Random Joke Generator</h1>
        <p className="joke-text text-center">{joke}</p>
        <div className="text-center">
          <button className="btn btn-primary mt-4" onClick={fetchJoke}>
            Get New Joke
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;