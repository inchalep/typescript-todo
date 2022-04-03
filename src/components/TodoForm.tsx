import React from "react";
import { Todo } from "../model";

interface Props {
  todo: Todo;
  setTodo: React.Dispatch<React.SetStateAction<Todo>>;
  todos: Todo[];
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoForm = ({
  todo,
  setTodo,
  todos,
  setTodos,
  edit,
  setEdit,
}: Props) => {
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const addhandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!edit) {
      if (todo.todoName) {
        setTodos([...todos, todo]);
        setTodo({ id: new Date().getTime(), todoName: "" });
      } else {
        alert("enter Todo");
      }
    } else {
      const filterItems = todos.filter((items) => items.id !== todo.id);
      setTodos([...filterItems, todo]);
      setTodo({ id: new Date().getTime(), todoName: "" });
      setEdit(!edit);
    }
  };
  return (
    <form onSubmit={addhandler}>
      <input
        type="text"
        name="todoName"
        value={todo.todoName}
        onChange={inputHandler}
        placeholder="Enter todo here..."
      />
      <button type="submit">{edit ? "Update" : "Add"}</button>
    </form>
  );
};
