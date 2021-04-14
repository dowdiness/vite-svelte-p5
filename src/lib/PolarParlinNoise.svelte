<script lang="ts">
  import type p5 from 'p5'
  import P5 from './p5/p5.svelte'

  let noiseMax = 5
  let radius = 200
  // let angle = 0.03
  const sketch = (p: p5) => {
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
      for (let a = 0; a < p.TWO_PI; a += 0.03) {
        let xoffset = p.map(p.cos(a+phase), -1, 1, 0, noiseMax)
        let yoffset = p.map(p.sin(a+phase), -1, 1, 0, noiseMax)
        let r = p.map(p.noise(xoffset, yoffset, zoffset), 0, 1, radius / 3, radius)
        let x = r * p.cos(a)
        let y = r * p.sin(a)
        p.vertex(x, y)
      }
      p.endShape(p.CLOSE)
      zoffset += 0.01
      phase += 0.01
    }
  }

</script>

<section class="flex flex-wrap justify-around space-x-4">
  <div class="w-48">
    <sl-range
      label="Noise Max"
      help-text="円にかかるノイズの強さ"
      min="0"
      max="50"
      step="0.1"
      on:sl-change={(event)=>{noiseMax = event.target.value}}
    >
    </sl-range>
  </div>

  <div class="w-48">
    <sl-range
      label="Radius"
      help-text="円の半径の長さ"
      min="100"
      max="400"
      step="1"
      on:sl-change={(event)=>{radius = event.target.value}}
    >
    </sl-range>
  </div>
</section>

<P5 {sketch} />
