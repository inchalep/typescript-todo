import React from "react";
import { Todo } from "../model";

interface Props {
  todos: Todo[];
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setTodo: React.Dispatch<React.SetStateAction<Todo>>;
}

const TodoShow = ({ todos, setTodos, setTodo, setEdit, edit }: Props) => {
  const deleteTodo = (index: number) => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  const editTodo = (todo: Todo) => {
    setTodo(todo);
    setEdit(!edit);
  };
  return (
    <ul className="todoShow">
      {todos &&
        todos.map((todo, index) => (
          <li key={todo.id}>
            <p>{todo.todoName}</p>
            <div>
              <span onClick={() => editTodo(todo)}>Edit</span>
              <span onClick={() => deleteTodo(index)}>Delete</span>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default TodoShow;
