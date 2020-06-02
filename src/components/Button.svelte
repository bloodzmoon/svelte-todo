<style>
  .button {
    font-family: inherit;
    letter-spacing: 0.6px;
    font-size: 13.33px;
    width: 100px;
    height: 40px;
    color: #fff;
    background: #333;
    border: none;
    border-radius: 0;
    cursor: pointer;
    transition: 0.2s;
  }
  .button:hover {
    background: #f83a00;
  }
  .button:focus {
    outline: none;
  }
</style>

<button class="button">
  <slot />
</button>
