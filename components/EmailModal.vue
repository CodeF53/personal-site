<script setup lang="ts">
const open = ref(false)

defineExpose({
  open: () => open.value = true,
})

function goToEmail() {
  navigateTo(atob('bWFpbHRvOmZzZXVzYkBnbWFpbC5jb20='), { external: true })
  open.value = false
}
</script>

<template>
  <div v-if="open" class="dialogWrapper col centerChildren" @click="open = false">
    <div class="dialog col centerChildren gap2 panel" @click.stop>
      <span>To get access to my email, first confirm you're not a robot</span>

      <NotAnAsshole :on-success="goToEmail" />

      <button class="closeButton interactive row centerChildren gap1" @click="open = false">
        <Icon name="material-symbols:close" />
        Cancel
      </button>
    </div>
  </div>
</template>

<style>
.dialogWrapper {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(0.2rem);
  z-index: 99999;
}

.dialog {
  background-color: hsl(270, 90%, 15%);
}

.dialog .closeButton {
  align-self: flex-end;
  background-color: var(--accent-light);
  font-weight: bold;
  border: none;
  font-size: inherit;
  &, > * { color: var(--accent-dark); }
  svg {
    height: 1.25rem;
    width: 1.25rem;
  }
}
</style>
