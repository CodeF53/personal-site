<script setup lang="ts">
const canvas: Ref<undefined | HTMLCanvasElement> = ref()
const animationId: Ref<undefined | number> = ref()
const lastTime: Ref<DOMHighResTimeStamp> = ref(0)

const backgroundOffset: Ref<{ x: number, y: number }> = ref({ x: 0, y: 0 })
function dumbShit(e: MouseEvent) {
  const { clientX, clientY } = e
  const { innerWidth, innerHeight } = window

  backgroundOffset.value = {
    x: -(clientX - innerWidth / 2) / innerWidth,
    y: -(clientY - innerHeight / 2) / innerHeight,
  }

  const mousePoint = Point.all.at(-1)!
  mousePoint.x = clientX / 4
  mousePoint.y = clientY / 4
}

const handleResizeThrottled = useThrottle(handleResize, 33) // scale point positions at 30hz

function animate(time: number) {
  const deltaTime = time - lastTime.value
  lastTime.value = time
  renderFrame(deltaTime)
  animationId.value = requestAnimationFrame(animate)
}

onMounted(() => {
  if (!canvas.value)
    return
  initCanvas(canvas.value)

  animationId.value = requestAnimationFrame(animate)
  addEventListener('resize', handleResizeThrottled)
  addEventListener('mousemove', dumbShit)
})
onBeforeUnmount(() => {
  if (animationId.value !== undefined)
    cancelAnimationFrame(animationId.value)
  removeEventListener('resize', handleResizeThrottled)
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
