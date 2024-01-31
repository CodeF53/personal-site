import type { PointLike } from './point'

let ctx: CanvasRenderingContext2D
let volumeMultiplier: number
export function initDrawVars(ctx_: CanvasRenderingContext2D) {
  ctx = ctx_
  updateDrawVars()
}

export function updateDrawVars() {
  volumeMultiplier = (window.innerHeight * window.innerWidth / 150)
  ctx.lineWidth = 3
}

function getTransparency(point0: PointLike, point1: PointLike) {
  const distanceSquared = (point0.x - point1.x) ** 2 + (point0.y - point1.y) ** 2
  const transparency = (volumeMultiplier / distanceSquared) - 0.1

  return Math.min(Math.floor(transparency * 255), 255)
}

export function drawLine(point0: PointLike, point1: PointLike) {
  const transparency = getTransparency(point0, point1)
  if (transparency <= 0)
    return

  let opacityHex = transparency.toString(16)
  if (opacityHex.length === 1)
    opacityHex = `0${opacityHex}`
  ctx.strokeStyle = `#FFFFFF${opacityHex}`

  ctx.beginPath()
  ctx.moveTo(point0.x, point0.y)
  ctx.lineTo(point1.x, point1.y)
  ctx.stroke()
}
