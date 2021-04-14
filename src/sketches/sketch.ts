// https://github.com/golanlevin/circle-morphing/blob/master/circle-to-square/circle12/sketch.js
import type p5 from "p5"

export default function sketch(p: p5) {
  var nPoints = 90;

  p.setup = () => {
    p.createCanvas(400, 400);
  }

  p.draw= () => {
    p.background(255, 255, 255);
    p.noFill();
    p.push();
    p.translate(p.width/2, p.height/2);
    p.rotate(p.PI*0.25);

    var radius = p.width / 2 * 0.75;
    var frac = p.map(p.sin(p.millis() / 2000.0), -1,1, 1,2);
    p.stroke(0);
    p.strokeWeight(3);
    p.strokeJoin(p.ROUND);
    p.beginShape();
    for (var i = 0; i <= nPoints; i++) {
      var t = p.map(i, 0, nPoints, 0, p.HALF_PI);
      var px = radius * p.pow(p.cos(t), frac);
      var py = radius * p.pow(p.sin(t), frac);
      p.vertex(px, py);
    }
    for (var i = 0; i <= nPoints; i++) {
      var t = p.map(i, 0, nPoints, 0, p.HALF_PI);
      var px = radius * p.pow(p.cos(t), frac);
      var py = 0 - radius * p.pow(p.sin(t), frac);
      p.vertex(py, px);
    }
    for (var i = 0; i <= nPoints; i++) {
      var t = p.map(i, 0, nPoints, 0, p.HALF_PI);
      var px = 0 - radius * p.pow(p.cos(t), frac);
      var py = 0 - radius * p.pow(p.sin(t), frac);
      p.vertex(px, py);
    }
    for (var i = 0; i <= nPoints; i++) {
      var t = p.map(i, 0, nPoints, 0, p.HALF_PI);
      var px = 0 - radius * p.pow(p.cos(t), frac);
      var py = radius * p.pow(p.sin(t), frac);
      p.vertex(py, px);
    }
    p.endShape(p.CLOSE);
    p.pop();
  }
}
