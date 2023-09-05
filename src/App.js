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
  const [filterStatus, setFilterStatus] = useState("all");
  const filteredTasks = tasks.filter((e) => {
    if (filterStatus === "all") {
      return true;
    }
    if (filterStatus === "incomplete") {
      return e.isComplete === false;
    }
    if (filterStatus === "completed") {
      return e.isComplete === true;
    }
  });
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

      {filteredTasks.map((e, i) => {
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
            <select
              onChange={(e) => {
                const copy = _.cloneDeep(tasks);
                copy[i].color = e.target.value;
                setTasks(copy);
              }}
            >
              <option value={"-"}>-</option>
              <option value={"black"}>black</option>
              <option value={"green"}>green</option>
              <option value={"blue"}>blue</option>
              <option value={"pink"}>pink</option>
              <option value={"red"}>red</option>
              <option value={"yellow"}>yellow</option>
            </select>
          </div>
        );
      })}
      <button
        onClick={() => {
          setFilterStatus("all");
        }}
      >
        all
      </button>

      <button
        onClick={() => {
          setFilterStatus("incomplete");
        }}
      >
        incomplete
      </button>

      <button
        onClick={() => {
          setFilterStatus("completed");
        }}
      >
        completed
      </button>
    </div>
  );
}

export default App;
