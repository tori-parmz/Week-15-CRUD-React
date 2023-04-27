import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NewCategoryForm from "./components/NewCategoryForm";
import "bootstrap-icons/font/bootstrap-icons.css";
import { getCategories } from "./components/MenuApi";
import { useEffect, useState } from "react";

function App() {
  //how to structure: where is data needed where is it passing?
  return (
    <div className="App">
      <header className="App-header">
        <NewCategoryForm/>
        </header>
    </div>
  );
}

export default App;
