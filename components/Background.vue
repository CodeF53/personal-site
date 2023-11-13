<script setup lang="ts">
const canvas: Ref<undefined | HTMLCanvasElement> = ref()
const intervalId: Ref<undefined | NodeJS.Timeout> = ref()

const backgroundOffset: Ref<{ x: number; y: number }> = ref({ x: 0, y: 0 })
function dumbShit(e: MouseEvent) {
  const { clientX, clientY } = e
  const { innerWidth, innerHeight } = window

  backgroundOffset.value = {
    x: -(clientX - innerWidth / 2) / innerWidth,
    y: -(clientY - innerHeight / 2) / innerHeight,
  }
}

const handleResizeDebounced = useDebounce(handleResize, 500)

onMounted(() => {
  if (!canvas.value)
    return
  initCanvas(canvas.value)

  intervalId.value = setInterval(renderFrame, 16)
  addEventListener('resize', handleResizeDebounced)
  addEventListener('mousemove', dumbShit)
})
onBeforeUnmount(() => {
  if (intervalId.value)
    clearInterval(intervalId.value)
  removeEventListener('resize', handleResizeDebounced)
  removeEventListener('mousemove', dumbShit)
})
</script>

<template>
  <canvas id="background" ref="canvas" :style="{ '--offset-x': `${backgroundOffset.x}rem`, '--offset-y': `${backgroundOffset.y}rem` }" />
</template>

<style lang="scss">
#background {
  position: fixed;
  top: -.5rem; left: -.5rem;
  width: calc(100vw + 1rem);
  height: calc(100vh + 1rem);
  z-index: -1;
  filter: blur(.5rem);

  translate: var(--offset-x) var(--offset-y);
  transition: translate 1s cubic-bezier(0.22, 1, 0.36, 1);
}
</style>
