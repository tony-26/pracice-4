import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const initialTasks = [
    { text: "do work", isComplete: false, color: "red" },
    { text: "play fifa", isComplete: true, color: "pink" },
    { text: "do housework", isComplete: false, color: "black" },
    { text: "play sports", isComplete: true, color: "green" },
  ];
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <div className="App">
      <h1>To Do List</h1>
      <input
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      ></input>
      <button>Add Task</button>

      {tasks.map((e) => {
        return (
          <div style={{ color: e.color }}>
            {e.text}
            <input type="checkbox" checked={e.isComplete} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
