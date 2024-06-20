let cols;
let rows;
let spacing = 40;
let angle = 0;
let speed = 0.03;
let eps = 0.03;
let radius = 20;
let used_len = 400;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  cols = used_len / spacing;
  rows = used_len / spacing;
}

function draw() {
  background(0);

  let top_left_x = (width - used_len) / 2;
  let top_left_y = (height - used_len) / 2;
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      fill(0, 200, 0);
      ellipse(top_left_x + spacing / 2 + i * spacing, top_left_y + spacing / 2 + j * spacing, radius, radius);
    }
  }

  // translate(300, 300); // Move origin to the center of the canvas
  // rotate(angle); // Rotate around the current origin (center of the canvas)
  // translate(-190, -190); // Move back to the top-left corner of the grid

  let curr_cnt = 0;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      fill(200, 0, 0);
      let x = top_left_x + (i + 0.5) * spacing;
      let y = top_left_y + (j + 0.5) * spacing;
      let tl_x = x - width / 2;
      let tl_y = y - height / 2;
      // let r = sqrt((x - width / 2) ** 2 + (y - height / 2) ** 2)
      let rot_x = width / 2 + tl_x * cos(angle) + tl_y * sin(angle);
      let rot_y = height / 2 - tl_x * sin(angle) + tl_y * cos(angle);
      let temp_x = (rot_x - top_left_x) / spacing - 1 / 2;
      let temp_y = (rot_y - top_left_y) / spacing - 1 / 2;
      if (abs(temp_x - round(temp_x)) <= eps &&
          abs(temp_y - round(temp_y)) <= eps) {
        fill(255, 255, 255);
        curr_cnt++;
        // console.log()
      }
      
      // ellipse(i * spacing + 100 + spacing / 2, j * spacing + height / 6 + spacing / 2, 10, 10);
      // ellipse(i * spacing, j * spacing, 10, 10);
      ellipse(rot_x, rot_y, radius, radius);
      
    }
  }

  if (curr_cnt > 10) {
    console.log(angle, curr_cnt);
  }
  // angle += speed;
  angle = (angle+speed)%90
}
