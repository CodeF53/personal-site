<script setup lang="ts">
const canvas: Ref<undefined | HTMLCanvasElement> = ref()
const intervalId: Ref<undefined | NodeJS.Timeout> = ref()

onMounted(() => {
  if (!canvas.value)
    return

  initCanvas(canvas.value)
  initPoints()

  intervalId.value = setInterval(renderFrame, 8)
  addEventListener('resize', useDebounce(handleResize, 250))
})
onBeforeUnmount(() => {
  if (intervalId.value)
    clearInterval(intervalId.value)
})
</script>

<template>
  <canvas id="background" ref="canvas" />
</template>

<style lang="scss">
#background {
  position: absolute;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  filter: blur(.5rem);
}
</style>
