import React from "react";
import "./App.css";
import StarWarsList from "./StarWarsList";
import MyComponent from "./MyComponent";
import HelloWorld from "./HelloWorld";
import Intentional404 from "./Intentional404";

function App() {
  return (
    <div className="app">
      <HelloWorld />
      <StarWarsList />
      <MyComponent />
      <Intentional404 />
    </div>
  );
}

export default App;
