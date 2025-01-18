const paper = document.querySelector("#paper");
const time_label = document.querySelector(".time_sec");
pen = paper.getContext("2d");
const pi = Math.PI;
let randian = pi / 180;
const draw = () => {
  paper.width = paper.clientWidth;
  paper.height = paper.clientHeight;
  const length = paper.width * 0.8;
  const small_radius = length * 0.45 - 15;
  const large_radius = length * 0.45 + 15;
  const mini_small_radius = length * 0.3 - 2;
  const mini_large_radius = length * 0.3 + 2;

  // TODO: find the stroke for circle (different styles like dashes and custom)

  pen.strokeStyle = "#cdcdcd";
  pen.lineWidth = 2;
  for (let i = -240; i <= 60; i = i + 5) {
    let start = {
      x: paper.width * 0.5 + mini_small_radius * Math.cos(i * randian),
      y: paper.height * 0.5 + mini_small_radius * Math.sin(i * randian),
    };

    let end = {
      x: paper.width * 0.5 + mini_large_radius * Math.cos(i * randian),
      y: paper.height * 0.5 + mini_large_radius * Math.sin(i * randian),
    };
    if (i == -180 || i == -90 || i == 0) {
      let extra = {
        x: paper.width * 0.5 + (mini_large_radius - 10) * Math.cos(i * randian),
        y:
          paper.height * 0.5 + (mini_large_radius - 10) * Math.sin(i * randian),
      };
      pen.beginPath();
      pen.moveTo(extra.x, extra.y);
      pen.lineTo(end.x, end.y);
      pen.stroke();
    } else {
      pen.beginPath();
      pen.moveTo(start.x, start.y);
      pen.lineTo(end.x, end.y);
      pen.stroke();
    }
  }

  pen.lineWidth = 4;
  for (let i = -240; i <= 60; i = i + 6) {
    let start = {
      x: paper.width * 0.5 + small_radius * Math.cos(i * randian),
      y: paper.height * 0.5 + small_radius * Math.sin(i * randian),
    };

    let end = {
      x: paper.width * 0.5 + large_radius * Math.cos(i * randian),
      y: paper.height * 0.5 + large_radius * Math.sin(i * randian),
    };

    pen.beginPath();
    pen.moveTo(start.x, start.y);
    pen.lineTo(end.x, end.y);
    pen.stroke();
  }
};
draw();

let time = 0;

setInterval(() => {
  time_label.textContent = time;
  time++;
  if (time == 30) {
    time = 0;
  }
}, 1000);
