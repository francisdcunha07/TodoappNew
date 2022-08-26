import react, { useState, useRef } from "react";
import InputField from "./components/List/InputField/InputFiled";
import List from "./components/List/List";

function App() {
  const [todoList, setTodolist] = useState([]);

  const buttonHandler = (ref) => {
    const name = ref.current.value;

    if (name === "") return;
    setTodolist((prevTodos) => {
      return [
        ...prevTodos,
        { id: new Date().valueOf(), name, complete: false },
      ];
    });
    ref.current.value = null;
  };

  const TodoClickHandler = (id) => {
    const newTodos = [...todoList];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodolist(newTodos);
  };

  function handleClearTodos() {
    const newTodos = todoList.filter((todo) => !todo.complete);
    setTodolist(newTodos);
  }

  return (
    <div className="App">
      <List listData={todoList} handleTodoClick={TodoClickHandler} />

      <InputField btnSubmit={buttonHandler} />
      <div>
      <button onClick={handleClearTodos}>Clear Completed Task</button>
      </div>
    </div>
  );
}

export default App;
