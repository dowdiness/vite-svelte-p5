import type p5 from "p5"

export default function sketch(p: p5) {
  p.setup = () => {
    p.createCanvas(400, 400)
  }
  p.draw = () => {}
}
