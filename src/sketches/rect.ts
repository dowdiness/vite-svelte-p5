// 参考　https://openprocessing.org/sketch/1118632
import type p5 from "p5"

type rect = {
  x: number;
  y: number;
  w: number;
};

type circle = {
  x: number;
  y: number;
  d: number;
};

const colors = [
  "#34bcd1",
  "#ffe042",
  "#ff6397",
  "#276496",
  "#ffffff",
  "#404040",
];
const rects: rect[] = [];
const circles: circle[] = [];
export const sketch = (p: p5): void => {
  p.setup = () => {
    p.createCanvas(p.windowWidth - 30, p.windowHeight - p.windowHeight * 0.4);
    p.rectMode(p.CENTER);
    p.frameRate(24);
    p.shuffle(colors, true);

    p.background(colors[0]);
    tiling();

    p.fill(colors[2]);
    p.noStroke();
    for (let i = 0; i < 100; i++) {
      circles.push({
        x: p.random(p.width),
        y: p.random(p.height),
        d: p.random(p.random(p.random(200))),
      });
      p.circle(circles[i].x, circles[i].y, circles[i].d);
    }

    p.fill(colors[1]);
    for (const r of rects) {
      p.rect(r.x, r.y, r.w, r.w);
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth - 30, p.windowHeight - p.windowHeight * 0.4);

    p.background(colors[0]);
    tiling();

    p.fill(colors[2]);
    p.noStroke();
    for (let i = 0; i < 100; i++) {
      p.circle(circles[i].x, circles[i].y, circles[i].d);
    }

    // p.fill(colors[1]);
    // for (const r of rects) {
    //   p.rect(r.x, r.y, r.w, r.w);
    // }
  };

  p.draw = () => {
    p.background(colors[0]);
    tiling();

    p.fill(colors[2]);
    p.noStroke();
    for (let i = 0; i < 100; i++) {
      p.circle(
        circles[i].x + p.random(-2, 2),
        circles[i].y + p.random(-2, 2),
        circles[i].d + p.random(-10, 10)
      );
    }
  };

  function tiling() {
    const seg = p.int(p.random(8, 20));
    const w = p.width / seg;
    p.noStroke();
    p.fill(colors[1]);
    for (let i = 0; i <= seg; i++) {
      for (let j = 0; j <= seg; j++) {
        const x = i * w + w / 2;
        const y = j * w + w / 2;
        const ww = w * 0.8;
        if (p.random() < 0.25) {
          rects.push({
            x: x - w / 2,
            y: y - w / 2,
            w: w - ww,
          });
        }
        p.rect(x - w / 2, y - w / 2, w - ww, w - ww);
        if (i != seg && j != seg) {
          p.rect(x, y, ww, ww);
          if (p.random() < 0.25) {
            rects.push({
              x: x,
              y: y,
              w: ww,
            });
          }
        }
      }
    }
  }
};

export default sketch;
