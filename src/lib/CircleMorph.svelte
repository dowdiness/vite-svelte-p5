<script lang="ts">
  import p5 from 'p5'
  import P5 from './p5/p5.svelte';
  import Slider from '@fouita/slider'

  const colors = [
    "#34bcd1",
    "#ffe042",
    "#ff6397",
    "#276496",
    "#ffffff",
    "#404040",
  ]

  let cirPath = []
  let triPath = []
  let spacing = 10
  let theta = 90
  let animate = true
  let reverse = false

  const sketch = (p: p5) => {
    p.setup = () => {
      const polarToCartesian = (r: number, angle: number) => {
        return p.createVector(r * p.cos(angle), r * p.sin(angle))
      }

      p.createCanvas(300, 300)
      p.angleMode(p.DEGREES)
      let radius = 100
      let startA = 0
      let endA = 120
      let start = polarToCartesian(radius, startA)
      let end = polarToCartesian(radius, endA)
      for (let angle = startA; angle < 360; angle += spacing) {
        const cv = polarToCartesian(radius, angle)
        cirPath.push(cv)
        let amt = (angle % 120) / (endA - startA)
        let tv = p5.Vector.lerp(start, end, amt)
        triPath.push(tv)
        if ((spacing + angle) % 120 === 0) {
          startA = startA + 120
          endA = endA + 120
          start = polarToCartesian(radius, startA)
          end = polarToCartesian(radius, endA)
        }
      }
    }

    p.draw = () => {
      p.background(220)
      p.translate(p.width / 2, p.height / 2)
      p.stroke(0)
      p.strokeWeight(4)
      p.rotate(30)
      p.fill(colors[0])
      p.beginShape()
      p.beginShape()
      if (animate) {
        theta += reverse ? -1 : 1
      }
      if (theta == 620) {
        reverse = true
      } else if (theta == 0) {
        reverse = false
      }
      let amt = (p.sin(theta) + 1) / 2
      for (let i = 0; i < cirPath.length; i++) {
        let cv = cirPath[i]
        let tv = triPath[i]
        let x = p.lerp(cv.x, tv.x, amt)
        let y = p.lerp(cv.y, tv.y, amt)
        p.vertex(x, y)
      }
      p.endShape(p.CLOSE)

      // for (let i = 0; i < cirPath.length; i++) {
      //   let v = cirPath[i]
      //   p.vertex(v.x, v.y)
      // }
      // p.endShape(p.CLOSE)
      // p.beginShape()
      // for (let i = 0; i < triPath.length; i++) {
      //   let v = triPath[i]
      //   p.vertex(v.x, v.y)
      // }
      // p.endShape(p.CLOSE)
    }
  };
</script>

<label class="inline-flex items-center">
  <input type="checkbox" bind:checked={animate} class="form-checkbox text-indigo-600 w-8 h-8">
  <span class="ml-2 text-2xl">Animation</span>
</label>

<div class="text-3xl text-center">
	{theta}
</div>

<Slider class="my-6 mx-6 w-64" tooltip=hover bind:value={theta} min={90} max={620} step={1} />
<P5 {sketch} />
