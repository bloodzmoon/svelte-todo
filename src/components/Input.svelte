<script>
  export let placeholder, value;
</script>

<style>
  .input {
    font-family: inherit;
    padding: 10px;
    border: none;
    border-radius: 0;
    background: white;

    min-width: 320px;
    font-size: 16px;
    transition: 0.2s;
  }

  .input:focus,
  .input:hover {
    outline: none;
    background: #f7f7f7;
  }

  .input::placeholder {
    color: #a4a4a4;
  }
</style>

<input {placeholder} class="input" bind:value />
