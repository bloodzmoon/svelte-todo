<script>
  import Router, { link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
  import { todos } from "./store.js";
  import { routes } from "./routes";
  todos.useLocalStorage();
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Kanit&display=swap");

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: "Roboto", "Kanit", Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #292929;
  }

  #nav {
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100vw;
    height: 60px;
    background: #191919;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :global(#nav a) {
    width: 100px;
    height: 40px;
    border-radius: 3px;
    margin: 0 5px;
    font-size: 18px;
    transition: 0.2s;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :global(#nav a:hover) {
    background: #333333;
  }

  :global(#nav a.active) {
    color: #f83a00;
  }

  :global(a:any-link) {
    color: inherit;
  }
  :global(::selection) {
    background: #f83a00;
    color: white;
  }
</style>

<div>
  <nav id="nav">
    <a href="/" use:link use:active>Home</a>
    <a href="/todo" use:link use:active>Todo</a>
  </nav>
  <Router {routes} />
</div>
