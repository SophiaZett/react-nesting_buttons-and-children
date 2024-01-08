import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Tic</Button>
      <Button>Tac</Button>
      <Button>Toe</Button>
      <Button>Poop</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
