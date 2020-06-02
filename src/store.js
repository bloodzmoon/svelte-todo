import { writable } from "svelte/store";
import { v4 as uuid } from "uuid";

export const createTodos = () => {
  const { subscribe, set, update } = writable([]);
  return {
    subscribe,
    addTodo: (newTodo) =>
      update((todos) => [...todos, { id: uuid(), task: newTodo, done: false }]),
    delTodo: (id) => update((todos) => todos.filter((todo) => todo.id !== id)),
    toggleTodo: (id) =>
      update((todos) =>
        todos.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        )
      ),
    useLocalStorage: () => {
      const data = localStorage.getItem("svelte-todo");
      if (data) set(JSON.parse(data));

      subscribe((value) => {
        localStorage.setItem("svelte-todo", JSON.stringify(value));
      });
    },
  };
};

export const todos = createTodos();
