import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import ThemContext from "./context/ThemContext";

function App() {

  return (
    <ThemContext>
    <Header/>
    <Main/>
    </ThemContext>
  );
}

export default App;
