import type p5 from "p5"

export const setup = (p5: p5, canvasParentRef: Element) => {
  return p5.createCanvas(300, 300, p5.WEBGL).parent(canvasParentRef)
}

export const draw = (p5: p5) => {
  p5.background(100)
  p5.normalMaterial()
  p5.noStroke()

  p5.push()
  p5.translate(-40, 50)
  p5.rotateY(0)
  p5.rotateX(-0.9)
  p5.box(100)
  p5.pop()

  p5.noFill()
  p5.stroke(255)
  p5.push()
  p5.translate(400, p5.height * 0.35, -200)
  p5.sphere(300)
  p5.pop()
}

export const windowResized = (p5: p5) => {
  p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
}

export default {
  setup,
  draw,
  windowResized,
}
