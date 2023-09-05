import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import _ from "lodash";

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
        value={userInput}
      ></input>
      <button
        onClick={() => {
          const copy = _.cloneDeep(tasks);
          copy.push({ text: userInput, isComplete: false, color: "black" });
          setTasks(copy);
          setUserInput("");
        }}
      >
        Add Task
      </button>

      {tasks.map((e, i) => {
        return (
          <div key={i} style={{ color: e.color }}>
            <button
              onClick={() => {
                const copyT = _.cloneDeep(tasks);
                const newTask = copyT.slice(0, i).concat(copyT.slice(i + 1));
                setTasks(newTask);
              }}
            >
              -
            </button>
            {e.text}
            <input
              onChange={(e) => {
                const copyTasks = _.cloneDeep(tasks);
                copyTasks[i].isComplete = !copyTasks[i].isComplete;
                setTasks(copyTasks);
              }}
              type="checkbox"
              checked={e.isComplete}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
