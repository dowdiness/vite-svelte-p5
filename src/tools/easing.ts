// 参考 https://easings.net/
import type p5 from "p5"

export const easings = (p: p5) => {
  const easeInSine = (x: number): number => {
    return 1 - p.cos((x + p.PI) / 2)
  }

  const easeOutSine = (x: number): number => {
    return p.sin((x + p.PI) / 2)
  }

  const easeInOutSine = (x: number): number => {
    return -(p.cos(p.PI * x) - 1) / 2
  }
  const easeInCubic = (x: number): number => {
    return x * x * x;
  }
  const easeOutCubic = (x: number): number => {
    return 1 - p.pow(1 - x, 3)
  }

  const easeInOutCubic = (x: number): number => {
    return x < 0.5 ? 4 * x * x * x : 1 - p.pow(-2 * x + 2, 3) / 2
  }

  return {
    easeInSine,
    easeOutSine,
    easeInOutSine,
    easeInCubic,
    easeOutCubic,
    easeInOutCubic,
  }
}
