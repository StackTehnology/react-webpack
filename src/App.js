import React from "react";
import "./App.css";
export const App = () => {
  return (
    <div>
      <h2 className="test">Welcome to React App</h2>
      <h3>Date : {new Date().toDateString()}</h3>
    </div>
  );
};
