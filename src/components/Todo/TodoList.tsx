import * as elements from "typed-html";
import { Todo } from "../../db/schema";

import { TodoForm } from "../Todo/TodoForm";
import { TodoItem } from "../Todo/TodoItem";

export function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem {...todo} />
      ))}
      <TodoForm />
    </div>
  );
}
