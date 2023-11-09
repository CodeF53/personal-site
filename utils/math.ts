import type { PointLike } from './point'

export const rand = (min: number, max: number): number => Math.random() * (max - min) + min
export const mod = (num: number, val: number): number => ((num % val) + val) % val
export const dist = (point0: PointLike, point1: PointLike): number => Math.sqrt((point0.x - point1.x) ** 2 + (point0.y - point1.y) ** 2)
