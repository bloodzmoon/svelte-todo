<script>
  import Input from "../components/Input.svelte";
  import Button from "../components/Button.svelte";
  import TodoList from "../components/TodoList.svelte";
  import { todos } from "../store.js";
  let newTodo;
  const handleSubmit = () => {
    todos.addTodo(newTodo);
    newTodo = "";
  };
</script>

<style>
  .todo-page {
    width: 100%;
    display: flex;
    padding-top: 160px;
    flex-direction: column;
    align-items: center;
  }
</style>

<div class="todo-page">
  <form on:submit|preventDefault={handleSubmit}>
    <Input placeholder="Type something to add..." bind:value={newTodo} />
    <Button>ADD</Button>
  </form>
  <TodoList />
</div>
