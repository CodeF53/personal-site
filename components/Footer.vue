<template>
  <footer>
    &copy; CodeF53 2022-{{ (new Date).getFullYear() }} with ❤️
  </footer>
</template>

<style>
footer {
  filter: opacity(0.5);
  font-size: 0.85rem;
  pointer-events: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
