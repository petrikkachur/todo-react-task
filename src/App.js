import style from "./App.module.css";
import { useState } from "react";
import AddTask from "./components/input/AddTask.jsx";
import Todo from "./components/todo-item/todo.jsx";
import DoneTask from "./components/done-item/done.jsx";
import Header from "./components/header/header.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const [doneTasks, setDoneTasks] = useState(
    localStorage.getItem("doneTasks")
      ? JSON.parse(localStorage.getItem("doneTasks"))
      : []
  );

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCheck: false }];
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  };
  const deleteItem = (index) => {
    const newTodos = todos.map((item) => {
      return { text: item.text, isCheck: false };
    });
    newTodos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  };
  const addDone = ({ index, text }) => {
    deleteItem(index);
    const newDone = [...doneTasks];
    newDone.push({ text, isCheck: true });
    localStorage.setItem("doneTasks", JSON.stringify(newDone));
    setDoneTasks(newDone);
  };
  const deleteDone = ({ index }) => {
    const newDone = [...doneTasks];
    newDone.splice(index, 1);
    localStorage.setItem("doneTasks", JSON.stringify(newDone));
    setDoneTasks(newDone);
  };
  const moveToTodo = ({ index, text }) => {
    deleteDone({ index });
    addTodo(text);
  };
  return (
    <div className={style.App}>
      <Router>
        <Header />
        <Switch>
          <Route path="/add-task">
            <AddTask addTodo={addTodo} />

            {todos.map((item, index) => (
              <Todo
                key={index}
                index={index}
                todo={item}
                deleteItem={deleteItem}
                isCompleted={addDone}
              />
            ))}
          </Route>
          <Route path="/done-tasks">
            {doneTasks.map((item, index) => (
              <DoneTask
                key={index}
                index={index}
                done={item}
                deleteItem={deleteDone}
                moveToTodo={moveToTodo}
              />
            ))}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
