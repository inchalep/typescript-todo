import React, { useState } from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import TodoShow from "./components/TodoShow";
import { Todo } from "./model";

const App = () => {
  const [todo, setTodo] = useState<Todo>({
    id: new Date().getTime(),
    todoName: "",
  });
  const [todos, setTodos] = useState<Todo[]>([]);
  const [edit, setEdit] = useState<boolean>(false);

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          fontSize: "35px",
          textDecoration: "underline",
        }}
      >
        REDUX TYPESCRIPT CRUD
      </h2>
      <TodoForm
        todo={todo}
        setTodo={setTodo}
        todos={todos}
        setTodos={setTodos}
        edit={edit}
        setEdit={setEdit}
      />
      <TodoShow
        todos={todos}
        setTodos={setTodos}
        setTodo={setTodo}
        setEdit={setEdit}
        edit={edit}
      />
    </div>
  );
};

export default App;
