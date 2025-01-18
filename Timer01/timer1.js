const paper = document.querySelector("#paper");
const time_label = document.querySelector(".time_sec");
// const bg_circle = document.querySelector("#bg_circle");
const bgArc = document.querySelector("#arcPathBg");
const overlay = document.querySelector("#overlay_path");
pen = paper.getContext("2d");
const pi = Math.PI;
let randian = pi / 180;
paper.width = paper.clientWidth;
paper.height = paper.clientHeight;
const length = paper.width * 0.8;
const small_radius = length * 0.45 - 15;
const large_radius = length * 0.45 + 15;
const mini_small_radius = length * 0.3 - 2;
const mini_large_radius = length * 0.3 + 2;
const pathM = {
  x: paper.width * 0.5 + length * 0.45 * Math.cos(-240 * randian),
  y: paper.height * 0.5 + length * 0.45 * Math.sin(-240 * randian),
};

const pathEnd = {
  x: paper.width * 0.5 + length * 0.45 * Math.cos(60 * randian),
  y: paper.height * 0.5 + length * 0.45 * Math.sin(60 * randian),
};
const draw = () => {
  // TODO: find the stroke for circle (different styles like dashes and custom)

  pen.strokeStyle = "#cdcdcd";
  pen.lineWidth = 2;
  for (let i = -240; i <= 60; i = i + 5) {
    const start = {
      x: paper.width * 0.5 + mini_small_radius * Math.cos(i * randian),
      y: paper.height * 0.5 + mini_small_radius * Math.sin(i * randian),
    };

    const end = {
      x: paper.width * 0.5 + mini_large_radius * Math.cos(i * randian),
      y: paper.height * 0.5 + mini_large_radius * Math.sin(i * randian),
    };
    if (i == -180 || i == -90 || i == 0) {
      const extra = {
        x: paper.width * 0.5 + (mini_large_radius - 10) * Math.cos(i * randian),
        y: paper.height * 0.5 +
          (mini_large_radius - 10) * Math.sin(i * randian),
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

  pen.lineWidth = 10;
  pen.strokeStyle = "#f0f0f0";
  for (let i = -240; i <= 60; i = i + 5) {
    const start = {
      x: paper.width * 0.5 + small_radius * Math.cos(i * randian),
      y: paper.height * 0.5 + small_radius * Math.sin(i * randian),
    };

    const end = {
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
overlay.setAttribute(
  "d",
  `M ${pathM.x} ${pathM.y} A ${length * 0.45} ${length * 0.45
  } 0 1 1 ${pathEnd.x} ${pathEnd.y}`,
);

setInterval(() => {
  time_label.textContent = time;

  const pathEnd = {
    x: paper.width * 0.5 +
      length * 0.45 * Math.cos((10 * time - 240) * randian),
    y: paper.height * 0.5 +
      length * 0.45 * Math.sin((10 * time - 240) * randian),
  };

  const largeArcFlag = 10 * time - 240 < -64 ? 0 : 1;

  const newPath = `M ${pathM.x} ${pathM.y} A ${length * 0.45} ${length * 0.45
    } 0 ${largeArcFlag} 1 ${pathEnd.x} ${pathEnd.y}`;

  bgArc.setAttribute("d", newPath);

  time++;
  if (time == 31) {
    time = 0;
  }
}, 1000);
