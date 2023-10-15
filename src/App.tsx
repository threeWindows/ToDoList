import { useState } from "react";
import CreateNewTask from "./components/CreateNewTask";
import Footer from "./components/Footer";
import ListOfTasks from "./components/ListOfTasks";

import { SyntheticEvent } from "react";

import initialTasks from "./components/tasks";

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskToEdit, setTaskToEdit] = useState("");
  const [taskId, setTaskId] = useState(-1);
  const [toggle, setToggle] = useState(true);

  const fn = (e: SyntheticEvent) => {
    let target = e.target as HTMLInputElement;
    setTaskToEdit(target.value);
  };

  const changeValue = (taskId: number, newText: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, text: newText };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      changeValue(taskId, taskToEdit);
      setToggle(false);
    }
  };

  return (
    <div>
      <CreateNewTask
        onClick={(text) => {
          setTasks([...tasks, { ...text, id: tasks.length + 1 }]);
        }}
      />
      <ListOfTasks
        idForChangeElement={taskId}
        changeEelement={toggle}
        valueOfEditTask={taskToEdit}
        onChange={fn}
        confirmChange={handleKeyPress}
        changeValueTask={(id, text) => (
          setTaskToEdit(text), setTaskId(id), setToggle(true)
        )}
        delateTask={(id) => setTasks(tasks.filter((e) => e.id != id))}
        tasks={tasks}
      />
      <Footer totalTasks={tasks.length}></Footer>
    </div>
  );
};

export default App;
