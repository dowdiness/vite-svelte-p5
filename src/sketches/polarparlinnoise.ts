// https://www.youtube.com/watch?v=ZI1dmHv3MeM
import type p5 from "p5"

export default function sketch(p: p5) {
  let phase = 0
  let zoffset = 0
  p.setup = () => {
    p.createCanvas(400, 400)
    p.background(0)
  }
  p.draw = () => {
    // p.translate(p.width / 2, p.map(zoffset * 6 % p.height, 0, 400, -200, 600))
    p.translate(p.width / 2, p.height / 2)
    p.background(0)
    p.stroke(255)
    p.noFill()
    p.beginShape()
    let noiseMax = 100
    for (let a = 0; a < p.TWO_PI; a += 0.03) {
      let xoffset = p.map(p.cos(a+phase), -1, 1, 0, noiseMax)
      let yoffset = p.map(p.sin(a+phase), -1, 1, 0, noiseMax)
      let r = p.map(p.noise(xoffset, yoffset, zoffset), 0, 1, 100, 200)
      let x = r * p.cos(a)
      let y = r * p.sin(a)
      p.vertex(x, y)
    }
    p.endShape(p.CLOSE)
    zoffset += 0.01
    phase += 0.01
  }
}
