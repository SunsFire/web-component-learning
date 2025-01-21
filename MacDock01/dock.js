const ulist = document.querySelectorAll("#dock > li");

ulist.forEach((li) => {
  li.addEventListener("mousemove", (e) => {
    let ratio = get_ration(e, li);
    li.style.width = 5 * ratio + "rem";
    li.style.transition = "width 0.3s ease";
  });
  li.addEventListener("mouseout", () => {
    li.style.width = "";
  });
  li.addEventListener("mousemove", (e) => { });
});

function get_ration(e, li) {
  const liwidth = li.clientWidth;
  const li_left_position = li.getBoundingClientRect();
  const adjustedLeft = li_left_position.left + window.screenX;
  const element_mouse_position = e.screenX - adjustedLeft;
  let position_ratio;
  if (element_mouse_position / liwidth > 0.5) {
    position_ratio =
      (liwidth - 2 * element_mouse_position) / (2 * liwidth) + 0.5;
    position_ratio = Math.abs(position_ratio);
  } else {
    position_ratio = element_mouse_position / liwidth;
  }
  return position_ratio;
}
