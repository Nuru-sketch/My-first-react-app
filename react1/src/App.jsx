import React from "react";
import "./App.css";
import Bienvenida from "./components/Bienvenida";
import Todo from "./components/todo";

function App() {
  const tareas = [
    "Aprender React",
    "Practicar con Vite",
    "Construir Proyectos Increibles",
  ];
  return (
    <>
      <Bienvenida/>
      <Todo tareas={tareas}/>
    </>
  );
}

export default App;
