import React from "react";
import "./App.css";
import Card from "./components/card";
import Grid from "./components/grid";

function App() {
  const ideas = [
    { id: "1", title: "Title", description: "description" },
    { id: "2", title: "Title 2", description: "description" },
    { id: "3", title: "Title 3", description: "description" },
  ];

  const cards = ideas.map((idea) => <Card key={idea.id} idea={idea} />);

  return (
    <div className="App">
      <>
        <h1>MindGames React</h1>
        <Grid cards={cards} />
      </>
    </div>
  );
}

export default App;
