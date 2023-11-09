import type { PointLike } from './point'

let ctx: CanvasRenderingContext2D
let screenMaxLength: number
export function initDrawVars(ctx_: CanvasRenderingContext2D, screenMaxLength_: number) {
  ctx = ctx_
  screenMaxLength = screenMaxLength_
}

export function drawCircle(point: PointLike) {
  ctx.beginPath()
  ctx.arc(point.x, point.y, 4, 0, 360)
  ctx.fill()
}
export function drawLine(point0: PointLike, point1: PointLike) {
  const distance = dist(point0, point1)

  let transparency = 1 - (distance / (screenMaxLength))
  transparency = (transparency - 0.75) * 5
  if (transparency < 0)
    return
  ctx.lineWidth = Math.min(transparency * 2, 3)

  transparency *= 255
  transparency = Math.floor(transparency)
  if (transparency === 0)
    return
  if (transparency > 255)
    transparency = 255

  let opacityHex = transparency.toString(16)
  if (opacityHex.length === 1)
    opacityHex = `0${opacityHex}`
  ctx.strokeStyle = `#FFFFFF${opacityHex}`

  ctx.beginPath()
  ctx.moveTo(point0.x, point0.y)
  ctx.lineTo(point1.x, point1.y)
  ctx.stroke()
}
