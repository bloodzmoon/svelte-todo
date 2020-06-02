<script>
  import { todos } from "../store.js";
</script>

<style>
  .todo-list {
    width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .todo-title {
    font-size: 20px;
    text-align: left;
  }

  .todo-item {
    width: 600px;
    padding: 10px 20px;
    border: 1px solid #eeeeee;
    transition: 0.2s;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    position: relative;
  }

  .todo-item.done {
    color: #c4c4c4;
  }

  .todo-item.done:before {
    color: #c4c4c4;
    content: "";
    position: absolute;
    width: 80%;
    height: 2px;
    background: #f83a00;
  }

  .todo-item:hover {
    border: 1px solid #c4c4c4;
  }

  .todo-item:hover > .del {
    opacity: 1;
  }

  .del {
    opacity: 0;
    transition: 0.2s;
    width: 40px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #777777;
  }

  .del:hover {
    background: #f7f7f7;
    color: red;
  }
</style>

<div class="todo-list">
  <h3 class="todo-title">TODO LIST</h3>
  {#each $todos as todo}
    <div
      class={todo.done ? 'todo-item done' : 'todo-item'}
      data-value={todo.id}
      on:click={e => todos.toggleTodo(e.target.dataset.value)}>
      {todo.task}
      <span
        class="del"
        data-value={todo.id}
        on:click={e => todos.delTodo(e.target.dataset.value)}>
        DEL
      </span>
    </div>
  {/each}
</div>
