export const rand = (min: number, max: number): number => Math.random() * (max - min) + min
export const mod = (num: number, val: number): number => ((num % val) + val) % val
