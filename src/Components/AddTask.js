import _ from "lodash";
import { useState } from "react";
const AddTask = (setTasks, tasks) => {
  const [userInput, setUserInput] = useState("");
  return (
    <div>
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
    </div>
  );
};
export default AddTask;
