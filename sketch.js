function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  // 绘制炸药管
  fill(139, 69, 19); // 棕色
  stroke(0);
  strokeWeight(2);
  rect(-30, 0, 60, 180, 20); // 增大炸药管的尺寸

  // 获取炸药管数量
  stroke(0);
  strokeWeight(4);
  push();
  line(-15, 180, -15, 1);
  pop();
  line(0, 180, 0, 1);
  pop();
  line(15, 180, 15, 1)

  // 绘制计时器背景
  fill(255); // 白色
  stroke(0);
  strokeWeight(2);
  ellipse(0, 60, 80, 80); // 注意这里的坐标变为 (0, 80)

  // 获取当前时间
  let hr = hour() % 12;
  let min = minute();
  let sec = second();

  // 绘制数字
  textSize(24); // 设置文字大小
  textAlign(CENTER, CENTER); // 设置文字对齐方式
  fill(0); // 设置文字颜色为黑色

  // 绘制时针数字
  text(hr, -20, 60);

  // 绘制分针数字
  text(min, 0, 60);

  // 绘制秒针数字
  text(sec, 25, 60);
}
