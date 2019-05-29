import React from "react";
import "./App.css";
import StarWarsList from "./StarWarsList";
import MyComponent from "./MyComponent";
import HelloWorld from "./HelloWorld";

function App() {
  return (
    <div className="app">
      <HelloWorld />
      <StarWarsList />
      <MyComponent />
    </div>
  );
}

export default App;
